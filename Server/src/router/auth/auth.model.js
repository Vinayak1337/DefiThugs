import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const AuthSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		isVerified: { type: Boolean, default: false },
		otp: { type: String, required: true }
	},
	{ timestamps: true }
);

const Auth = model('Auth', AuthSchema);

export default Auth;
