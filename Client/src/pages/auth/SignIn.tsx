import { ChangeEvent, useState, FormEvent } from 'react';
import { Button, FormInput } from 'components';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/auth.actions';

const SignIn = () => {
	const [state, setState] = useState({
			email: '',
			password: ''
		}),
		dispatch = useDispatch();

	const { email, password } = state;

	const changeState = (newState: Partial<typeof state>) =>
			setState(prevState => ({ ...prevState, ...newState })),
		handleChange = ({
			target: { value, name }
		}: ChangeEvent<HTMLInputElement>) => changeState({ [name]: value });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(loginUser({ email, password }));
	};

	return (
		<form className='flex flex-col items-center' onSubmit={handleSubmit}>
			<FormInput
				type='email'
				name='email'
				id='email'
				label='email'
				value={email}
				handleChange={handleChange}
				required
			/>
			<FormInput
				type='password'
				name='password'
				id='password'
				label='password'
				value={password}
				handleChange={handleChange}
				required
			/>
			<Button>Sign In</Button>
		</form>
	);
};

export default SignIn;
