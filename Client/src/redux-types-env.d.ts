interface State {
	userReducer: UserState;
	authReducer: AuthState;
	appReducer: AppState;
}

interface UserState {
	user: User;
}

interface AuthState {
	email: string;
	emailConfirmationSent: boolean;
	isEmailVerified: boolean;
	token: string;
}

interface AppState {}

interface User {}

type ActionType<T> = {
	type: T;
};

type ActionPayload<P> = {
	payload: P;
};

type ActionCallback<C = (() => void) | undefined | null> = {
	callback: C;
};

type Action<T> = ActionType<T>;

type ActionWithPayload<T, P> = ActionType<T> & ActionPayload<P>;

type ActionWithCallback<T, C> = ActionType<T> & ActionCallback<C>;

type ActionWithPayloadAndCallback<T, P, C> = ActionType<T> &
	ActionPayload<P> &
	ActionCallback<C>;
