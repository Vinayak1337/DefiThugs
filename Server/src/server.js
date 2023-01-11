'use strict';

import express from 'express';
import expressListRoutes from 'express-list-routes';
import chalk from 'chalk';
import connectDB from './utils/db-connect';
import initRoutes from './utils/routes';
import initMiddlewares from './utils/middlewares';
import aws from 'aws-sdk';
import config from './utils/config';

const { green, red } = chalk;

const app = express();
const PORT = config.PORT || 8080;
const ENV = config.ENV;

aws.config.update({
	accessKeyId: config.AWS_ACCESS_KEY,
	secretAccessKey: config.AWS_SECRET_KEY,
	region: config.AWS_REGION
});

app.baseUrl = config.BASE_URL;

app.get('/', (_, res) => {
	res.json({ message: 'Defi thugs server!' });
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
