import dotenv from 'dotenv';
dotenv.config();

const config = {
	JWT_SECRET: process.env.JWT_SECRET || '',
	JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '',
	JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '30d',
	MONGO_URI: process.env.MONGO_URI || '',
	PORT: process.env.PORT || '8080',
	BASE_URL: process.env.BASE_URL || '',
	ENV: process.env.NODE_ENV || 'production',
	FRONTEND_URL: process.env.FRONTEND_URL || '',
	AWS_SES_ARN: process.env.AWS_SES_ARN || '',
	AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || '',
	AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || '',
	AWS_REGION: process.env.AWS_REGION || '',
	AWS_SENDER_EMAIL: process.env.AWS_SENDER_EMAIL || '',
	SEND_GRID_SECRET_KEY: process.env.SEND_GRID_SECRET_KEY || ''
};

export default config;
