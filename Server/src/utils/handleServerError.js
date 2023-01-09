// @ts-check
'use strict';
/**
 *
 * @param {Error} err
 * @param {import('express').Response} res
 */
const handleServerError = (err, res) => {
	console.error(err);
	res.status(500).json({ message: 'Server error!', detail: err.message }).end();
};

export default handleServerError;
