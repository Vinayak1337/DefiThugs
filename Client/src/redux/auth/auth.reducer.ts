import { Reducer } from 'redux';
import rootActions from 'redux/root/root.actions';
import {
	CONFIRM_EMAIL,
	INITIAL_AUTH_STATE,
	LOGIN_USER,
	REGISTER_USER,
	SEND_EMAIL_CONFIRMATION
} from './auth.constants';

const authReducer: Reducer<AuthState, rootActions> = (
	state = INITIAL_AUTH_STATE,
	action
): AuthState => {
	switch (action.type) {
		case LOGIN_USER.LOGIN_USER_SUCCESS:
		case REGISTER_USER.REGISTER_USER_SUCCESS:
			return { ...state, token: action.payload };

		case SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_START:
		case SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_FAIL:
            return { ...state, emailConfirmationSent: false };
        
        case SEND_EMAIL_CONFIRMATION.SEND_EMAIL_CONFIRMATION_SUCCESS:
            return { ...state, emailConfirmationSent: true };

		case CONFIRM_EMAIL.CONFIRM_EMAIL_SUCCESS:
			return { ...state, isEmailVerified: true };

		case CONFIRM_EMAIL.CONFIRM_EMAIL_START:
		case CONFIRM_EMAIL.CONFIRM_EMAIL_FAIL:
			return { ...state, isEmailVerified: false };

		default:
			return state;
	}
};

export default authReducer;
