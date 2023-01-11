import { AuthActions } from 'redux/auth/auth.actions';

export enum GLOBAL_CONSTANTS {
	LOGOUT_USER = '@global/LOGOUT_USER'
}

type GlobalAction = Action<GLOBAL_CONSTANTS> | AuthActions;

type rootActions = GlobalAction;

export default rootActions;

export function createAction<T extends string>(
	type: T,
	payload: void,
	callback?: void
): Action<T>;

export function createAction<T extends string, P>(
	type: T,
	payload: P,
	callback?: void
): ActionWithPayload<T, P>;

export function createAction<T extends string, C>(
	type: T,
	payload: null,
	callback?: C
): ActionWithCallback<T, C>;

export function createAction<T extends string, P, C>(
	type: T,
	payload: P,
	callback?: C
): ActionWithPayloadAndCallback<T, P, C>;

export function createAction<T extends string, P, C>(
	type: T,
	payload: P,
	callback: C
): ActionWithPayloadAndCallback<T, P, C> {
	return {
		type,
		payload,
		callback
	};
}
