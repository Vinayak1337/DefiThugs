// @ts-check
'use strict';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import authenticator from './authenticator';

/**
 * @param {import('express').Application} app
 */
const initMiddlewares = app => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(morgan('dev'));
	app.use(cors());
	app.use(limiter);
	app.use(authenticator);
};

const limiter = rateLimit({
	windowMs: 1000,
	max: 50,
	message: 'Too many requests!',
	standardHeaders: true,
	legacyHeaders: false
});

export default initMiddlewares;
