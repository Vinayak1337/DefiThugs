// @ts-check
'use strict';
import handleServerError from './handleServerError';

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const protectUploads = async (_, res, next) => {
	try {
		// ! to be configured
		next();
	} catch (error) {
		handleServerError(error, res);
	}
};

export default protectUploads;
