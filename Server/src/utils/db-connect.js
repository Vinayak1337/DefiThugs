// @ts-check
'use strict';
import mongoose from 'mongoose';
import chalk from 'chalk';
import config from './config';
const { green } = chalk;

const connectDB = async () => {
	try {
		await mongoose.connect(config.MONGO_URI);
		console.log(green('Database connected!'));
	} catch (error) {
		throw error;
	}
};

export default connectDB;
