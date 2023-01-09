// @ts-check
'use strict';
import mongoose from 'mongoose';
import chalk from 'chalk';
const { green } = chalk;

/**
 * @param {import('express').Application} app
 */
const connectDB = async app =>
	new Promise(async (resolve, reject) => {
		try {
			const URI = process.env.MONGO_URI || '';
			await mongoose.connect(URI);
			const connection = await mongoose.createConnection(URI);
			console.log(green('Database connected!'));

			connection.on('open', () => {
				console.log(green('Connected to uploads collection!'));
				resolve(true);
			});
		} catch (error) {
			reject(error);
		}
	});

export default connectDB;
