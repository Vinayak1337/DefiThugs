import { all, call } from '@redux-saga/core/effects';
import authSagas from 'redux/auth/auth.saga';

export default function* rootSaga() {
	yield all([call(authSagas)]);
}
