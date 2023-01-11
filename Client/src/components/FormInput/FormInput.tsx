import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
// import './FormInput.scss';

const FormInput: FC<FormInputProps> = ({
	handleChange,
	label,
	hasError = false,
	errorMsg,
	disabled = false,
	...inputProps
}) => (
	<StyledForm className={disabled ? 'cursor-not-allowed' : ''}>
		<div className={`form-input ${hasError && 'form-error'}`}>
			<input className={disabled ? 'cursor-not-allowed' : ''} disabled={disabled} {...inputProps} onChange={handleChange} />
			<span></span>
			{label ? (
				<label
					hidden={disabled}
					className={`${
						inputProps.value.length ? 'shrink' : ''
					} form-input-label font-semibold`}
					htmlFor={label}>
					{label
						.split(' ')
						.map(l => l.charAt(0).toUpperCase() + l.slice(1))
						.join(' ')}
				</label>
			) : null}
		</div>
		{hasError ? <code>{errorMsg}</code> : ''}
	</StyledForm>
);

const StyledForm = styled.div`
	position: relative;
	padding: 0 40px;

	code {
		color: #ed4337;
		font-size: 16px;
		transition: 0.5s;
		font-weight: bold;
		position: relative;
		top: -10px;
	}

	.form-input {
		position: relative;
		border-bottom: 2px solid grey;
		margin: 25px 0;

		input {
			width: 100%;
			padding: 0 5px;
			height: 40px;
			font-size: 16px;
			border: none;
			background: none;
			outline: none;
			color: var(--black);
		}

		label {
			position: absolute;
			top: 50%;
			left: 3%;
			color: grey;
			transform: translateY(-50%);
			font-size: 16px;
			pointer-events: none;
			transition: 0.5s;
		}

		span::before {
			content: '';
			position: absolute;
			top: 40px;
			left: 0;
			width: 0%;
			height: 2px;
			background: var(--orange);
			transition: 0.5s;
		}

		input:focus ~ label,
		input:valid ~ label {
			top: -5px;
			color: #f06543;
		}

		input:focus ~ span::before,
		input:valid ~ span::before {
			width: 100%;
		}
	}

	.form-error {
		span::before {
			content: '';
			position: absolute;
			top: 40px;
			left: 0;
			width: 0%;
			height: 2px;
			background: #ed4337;
			transition: 0.5s;
		}

		input:focus ~ label,
		input:valid ~ label {
			top: -5px;
			color: #ed4337;
		}
	}
`;

export default FormInput;

interface FormInputProps {
	id: string;
	name: string;
	type: string;
	value: string;
	label: string;
	required?: boolean;
	hasError?: boolean;
	errorMsg?: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
}
