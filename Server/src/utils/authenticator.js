// @ts-check
'use strict';
import handleServerError from './handleServerError';

const authenticator = async (req, res, next) => {
	try {
		next();
	} catch (error) {
		handleServerError(error, res);
	}
};

export default authenticator;
