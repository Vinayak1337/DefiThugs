import { createAction } from 'redux/root/root.actions';
import {
	CONFIRM_EMAIL,
	LOGIN_USER,
	REGISTER_USER,
	SEND_EMAIL_CONFIRMATION
} from './auth.constants';

export type SendEmailConfirmation = ReturnType<typeof sendEmailConfirmation>;
export type ConfirmEmail = ReturnType<typeof confirmEmail>;
export type RegisterUser = ReturnType<typeof registerUser>;
export type LoginUser = ReturnType<typeof loginUser>;

export type AuthActions =
	| SendEmailConfirmation
	| ReturnType<typeof sendEmailConfirmationSuccess>
	| ReturnType<typeof sendEmailConfirmationFail>
	| ConfirmEmail
	| ReturnType<typeof confirmEmailSuccess>
	| ReturnType<typeof confirmEmailFail>
	| RegisterUser
	| ReturnType<typeof registerUserSuccess>
	| ReturnType<typeof registerUserFail>
	| LoginUser
	| ReturnType<typeof loginUserSuccess>
	| ReturnType<typeof loginUserFail>;

export const sendEmailConfirmation = (payload: {
	email: string;
	walletAddress: string;
}) =>
	createAction(SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_START, payload);

export const sendEmailConfirmationSuccess = () =>
	createAction(SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_SUCCESS);

export const sendEmailConfirmationFail = () =>
	createAction(SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_FAIL);

export const confirmEmail = (payload: { email: string; otp: string }) =>
	createAction(CONFIRM_EMAIL.CONFIRM_EMAIL_START, payload);

export const confirmEmailSuccess = () =>
	createAction(CONFIRM_EMAIL.CONFIRM_EMAIL_SUCCESS);

export const confirmEmailFail = () =>
	createAction(CONFIRM_EMAIL.CONFIRM_EMAIL_FAIL);

export const registerUser = (payload: {
	email: string;
	password: string;
	walletAddress: string;
}) => createAction(REGISTER_USER.REGISTER_USER_START, payload);

export const registerUserSuccess = (token: string) =>
	createAction(REGISTER_USER.REGISTER_USER_SUCCESS, token);

export const registerUserFail = () =>
	createAction(REGISTER_USER.REGISTER_USER_FAIL);

export const loginUser = (payload: { email: string; password: string }) =>
	createAction(LOGIN_USER.LOGIN_USER_START, payload);

export const loginUserSuccess = (token: string) =>
	createAction(LOGIN_USER.LOGIN_USER_SUCCESS, token);

export const loginUserFail = () => createAction(LOGIN_USER.LOGIN_USER_FAIL);
