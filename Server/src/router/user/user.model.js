import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema(
	{
		currentWallet: { type: String, required: true },
		wallets: {
			type: Array,
			default: []
		},
		password: { type: String, required: true }
	},
	{ timestamps: true }
);

const User = model('User', UserSchema);

export default User;
