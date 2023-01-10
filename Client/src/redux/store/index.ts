import Saga from 'redux-saga';
import Logger from 'redux-logger';
import {
	legacy_createStore as createStore,
	applyMiddleware,
	Middleware
} from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import { persistedReducer } from '../root/root.reducer';
import rootSaga from '../root/root.saga';

const sagaMiddleware = Saga();

const middlewares: Middleware[] = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') middlewares.push(Logger);

const Store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export const persistedStore = persistStore(Store);

export default Store;
