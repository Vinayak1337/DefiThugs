import { ChangeEvent, useState, FormEvent } from 'react';
import { Button, FormInput } from 'components';

const SignIn = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		isUserValid: true
	});

	const { email, password, isUserValid } = state;

	const changeState = (newState: Partial<typeof state>) =>
			setState(prevState => ({ ...prevState, ...newState })),
		handleChange = ({
			target: { value, name }
		}: ChangeEvent<HTMLInputElement>) => changeState({ [name]: value });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form className='flex flex-col items-center' onSubmit={handleSubmit}>
			{!isUserValid && <p>Either email or password is incorrect</p>}
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
