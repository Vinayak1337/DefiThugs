import { takeLatest, call, put, all } from 'redux-saga/effects';
import { API_CONSTANTS } from 'utils/CONSTANTS';
import {
	ConfirmEmail,
	confirmEmailFail,
	confirmEmailSuccess,
	LoginUser,
	loginUserFail,
	loginUserSuccess,
	RegisterUser,
	registerUserFail,
	registerUserSuccess,
	SendEmailConfirmation,
	sendEmailConfirmationFail,
	sendEmailConfirmationSuccess
} from './auth.actions';
import {
	CONFIRM_EMAIL,
	LOGIN_USER,
	REGISTER_USER,
	SEND_EMAIL_CONFIRMATION
} from './auth.constants';

function* sendEmailConfirmation(action: SendEmailConfirmation) {
	try {
		yield API.post(API_CONSTANTS.SEND_EMAIL_CONFIRMATION, action.payload);

		yield put(sendEmailConfirmationSuccess());
	} catch (error) {
		yield put(sendEmailConfirmationFail());
	}
}

function* confirmEmail(action: ConfirmEmail) {
	try {
		yield API.post(API_CONSTANTS.CONFIRM_EMAIL, action.payload);

		yield put(confirmEmailSuccess());
	} catch (error) {
		yield put(confirmEmailFail());
	}
}

function* registerUser(action: RegisterUser) {
	try {
		const { data } = yield API.post(
			API_CONSTANTS.REGISTER_USER,
			action.payload
		);

		yield put(registerUserSuccess(data.token));
	} catch (error) {
		yield put(registerUserFail());
	}
}

function* loginUser(action: LoginUser) {
	try {
		const { data } = yield API.post(API_CONSTANTS.LOGIN_USER, action.payload);

		yield put(loginUserSuccess(data.token));
	} catch (error) {
		yield put(loginUserFail());
	}
}

function* watchSendEmailConfirmationRequest() {
	yield takeLatest(
		SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_START,
		sendEmailConfirmation
	);
}

function* watchConfirmEmailRequest() {
	yield takeLatest(CONFIRM_EMAIL.CONFIRM_EMAIL_START, confirmEmail);
}

function* watchRegisterRequest() {
	yield takeLatest(REGISTER_USER.REGISTER_USER_START, registerUser);
}

function* watchLoginRequest() {
	yield takeLatest(LOGIN_USER.LOGIN_USER_START, loginUser);
}

export default function* authSagas() {
	yield all([
		call(watchSendEmailConfirmationRequest),
		call(watchConfirmEmailRequest),
		call(watchLoginRequest),
		call(watchRegisterRequest)
	]);
}
