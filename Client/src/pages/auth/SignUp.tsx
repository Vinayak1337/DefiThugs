import { Button, FormInput } from 'components';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	confirmEmail,
	registerUser,
	sendEmailConfirmation
} from 'redux/auth/auth.actions';
import Web3 from 'web3';

const SignUp = () => {
	const [state, setState] = useState({
			email: '',
			password: '',
			walletAddress: '',
			otp: ''
		}),
		[isEmailValid, emailConfirmationSent]: [boolean, boolean] = useSelector(
			(state: State) => [
				state.authReducer.isEmailVerified,
				state.authReducer.emailConfirmationSent
			]
		),
		dispatch = useDispatch();

	const { email, password, walletAddress, otp } = state,
		isWalletConnected = !!walletAddress;

	const changeState = (newState: Partial<typeof state>) =>
			setState(prevState => ({ ...prevState, ...newState })),
		handleChange = ({
			target: { value, name }
		}: ChangeEvent<HTMLInputElement>) => changeState({ [name]: value });

	const register = () =>
			dispatch(registerUser({ email, password, walletAddress })),
		sendEmail = () => dispatch(confirmEmail({ email, otp })),
		confirmEmailAddress = () =>
			dispatch(sendEmailConfirmation({ email, walletAddress }));

	async function connectWallet() {
		if (!window.ethereum) {
			toast.info('Please install metamask!');
			return;
		}

		try {
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts'
			});

			const web3 = new Web3(window.ethereum);
			const signature = await web3.eth.personal.sign(
				'Login using Wallet',
				accounts[0],
				''
			);

			web3.eth.accounts.recover('Login using Wallet', signature);

			changeState({ walletAddress: accounts[0] });
		} catch (err) {
			console.error(err);
		}
	}

	const handleSubmit = () => {
			if (!isWalletConnected) connectWallet();
			else if (!emailConfirmationSent) confirmEmailAddress();
			else if (!isEmailValid) sendEmail();
			else register();
		},
		getSubmitText = () => {
			if (!isWalletConnected) return 'Connect Wallet';
			else if (!emailConfirmationSent) return 'Send OTP';
			else if (!isEmailValid) return 'Confirm Email';
			return 'Sign Up';
		};

	return (
		<div className='flex-center flex-col' onClick={e => e.preventDefault()}>
			{isWalletConnected && (
				<>
					<FormInput
						type='email'
						name='email'
						id='email'
						label='email'
						value={email}
						handleChange={handleChange}
						required
						disabled={emailConfirmationSent}
					/>
					{emailConfirmationSent && !isEmailValid && (
						<FormInput
							type='tel'
							name='otp'
							id='otp'
							label='OTP'
							value={otp}
							handleChange={handleChange}
							required
						/>
					)}
					{isEmailValid && (
						<FormInput
							type='password'
							name='password'
							id='password'
							label='password'
							value={password}
							handleChange={handleChange}
							required
						/>
					)}
				</>
			)}
			<Button handleClick={handleSubmit}>{getSubmitText()}</Button>
		</div>
	);
};

export default SignUp;
