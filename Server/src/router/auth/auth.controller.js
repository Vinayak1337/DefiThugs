'use strict';

import { generateOtp, sendOtpToEmail } from '../../utils';
import handleServerError from '../../utils/handleServerError';
import Auth from './auth.model';
import User from '../user/user.model';
import { createToken } from '../../utils/jwt';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const sendEmailConfirmation = async (req, res) => {
	try {
		const { email, walletAddress } = req.body;

		const user = await Auth.findOne({
			email
		});

		const wallet = walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4);

		const otp = user?.otp || generateOtp();

		sendOtpToEmail(email, otp, wallet);

		if (!user) await Auth.create({ email, otp });

		res.status(200).json({ message: 'OTP sent to email' });
	} catch (error) {
		handleServerError(error, res);
	}
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const confirmEmail = async (req, res) => {
	try {
		const { email, otp } = req.body;

		const user = await Auth.findOne({
			email
		});

		if (!user) return res.status(404).json({ message: 'User not found' });

		if (user.otp !== otp)
			return res.status(400).json({ message: 'Invalid OTP' });

		await Auth.findOneAndUpdate(
			{
				email
			},
			{
				isVerified: true
			}
		);

		res.status(200).json({ message: 'Email verified' });
	} catch (error) {
		handleServerError(error, res);
	}
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const RegisterController = async (req, res) => {
	const { email, password, walletAddress } = req.body;

	try {
		const user = await Auth.findOne({ email });

		if (!user) return res.status(404).json({ message: 'User not found' });

		if (!user.isVerified)
			return res.status(400).json({ message: 'Email not verified' });

		const doc = await User.create({
			email,
			password,
			currentWallet: walletAddress,
			wallets: [walletAddress]
		});

		const token = createToken(doc._id);

		res.status(200).json({ message: 'User created', token });
	} catch (error) {
		handleServerError(error, res);
	}
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const LoginController = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({
			email
		});

		if (!user) return res.status(404).json({ message: 'User not found' });

		const isPasswordCorrect = await user.comparePassword(password);

		if (!isPasswordCorrect)
			return res.status(400).json({ message: 'Invalid credentials' });

		const token = createToken(user._id);

		res.status(200).json({ message: 'User logged in', token });
	} catch (error) {
		handleServerError(error, res);
	}
};
