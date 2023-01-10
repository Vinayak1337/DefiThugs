import { Button, FormInput } from 'components';
import { ChangeEvent, FormEvent, useState } from 'react';

const SignUp = () => {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

	const { email, password } = state;

	const changeState = (newState: Partial<typeof state>) =>
			setState(prevState => ({ ...prevState, ...newState })),
		handleChange = ({
			target: { value, name }
		}: ChangeEvent<HTMLInputElement>) => changeState({ [name]: value });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<FormInput
				type='email'
				name='email'
				id='email-signUp'
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
			<Button>Sign Up</Button>
		</form>
	);
};

export default SignUp;
