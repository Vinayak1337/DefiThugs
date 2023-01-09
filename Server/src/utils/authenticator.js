// @ts-check
'use strict'
import handleServerError from './handleServerError';

const authenticator = async (req, res, next) => {
	try {
		// ! to be configured
		next();
	} catch (error) {
		handleServerError(error, res);
	}
};

export default authenticator;