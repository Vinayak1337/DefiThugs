import { FC, useState, ReactNode } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth: FC = () => {
	const [toSignIn, setToSignIn] = useState(true);

	const toggleToSignIn = () => setToSignIn(prev => !prev);

	return (
		<div className='w-full h-full flex-center'>
			<div className='border-2 transition-all border-primary shadow-primary rounded-xl py-7 p-1 flex-center flex-col'>
				<div className='w-56 h-12 mb-4 rounded-3xl flex-center relative shadow-secondary'>
					<div
						className={`w-1/2 h-full rounded-3xl z-10 duration-500 transition-all bg-primary absolute top-0 ${
							toSignIn ? 'left-0' : 'left-1/2'
						}`}
					/>
					<Button handleClick={toggleToSignIn}>Sign In</Button>
					<Button handleClick={toggleToSignIn}>Sign Up</Button>
				</div>
				{toSignIn ? <SignIn /> : <SignUp />}
			</div>
		</div>
	);
};

const Button: FC<ButtonProps> = ({ handleClick, children }) => (
	<button
		className='w-1/2 h-full relative z-20 bg-transparent font-bold'
		type='button'
		onClick={handleClick}>
		{children}
	</button>
);

export default Auth;

interface ButtonProps {
	children: ReactNode;
	handleClick: () => void;
}
