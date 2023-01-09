'use strict';

import express from 'express';
import expressListRoutes from 'express-list-routes';
import chalk from 'chalk';
import { config } from 'dotenv';
import connectDB from './utils/db-connect';
import initRoutes from './utils/routes';
import initMiddlewares from './utils/middlewares';

const { green, red } = chalk;
config();

const app = express();
const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';

app.baseUrl = process.env.BASE_URL;

app.get('/', (_, res) => {
	res.json({ message: 'Chaintusker server!' });
});

initMiddlewares(app);
initRoutes(app);

const Start = async () => {
	try {
		await connectDB(app);

		app.listen(PORT, appCallback);
	} catch (error) {
		console.error(red(error));
	}
};

function appCallback() {
	if (ENV === 'development') expressListRoutes(app);
	console.log(green(`Server started on port ${PORT}!`));
}

export default Start;
