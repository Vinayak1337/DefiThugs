import { FC, ReactNode } from 'react';

const Button: FC<ButtonProps> = ({
	children,
	handleClick,
	disabled = false,
	hasFullWidth
}) => (
	<button
		className={`h-10 bg-primary text-base text-white-1 px-8 py-3 flex-center rounded-lg transition-all duration-300 font-bold disabled:cursor-not-allowed disabled:bg-opacity-70 ${
			hasFullWidth ? 'w-full' : 'w-fit'
		}`}
		onClick={handleClick}
		disabled={disabled}>
		{children}
	</button>
);

export default Button;

interface ButtonProps {
	disabled?: boolean;
	handleClick?: () => void;
	hasFullWidth?: boolean;
	children: ReactNode;
}
