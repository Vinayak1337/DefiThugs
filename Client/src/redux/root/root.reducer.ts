import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';
import authReducer from 'redux/auth/auth.reducer';

const rootPersistConfig = {
	key: 'defi-thugs-' + process.env.NODE_ENV,
	storage,
	whitelist: ['userReducer']
};

const authPersistConfig = {
	key: 'defi-thugs-auth-' + process.env.NODE_ENV,
	storage: storageSession
};

const appPersistConfig = {
	key: 'defi-thugs-app-' + process.env.NODE_ENV,
	storage: storageSession
};

const rootReducer = combineReducers({
	authReducer: persistReducer(authPersistConfig, authReducer)
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default rootReducer;
