import mongoose from 'mongoose';
const { Schema, model, SchemaTypes } = mongoose;

const UserSchema = new Schema(
	{
		email: { type: String, required: true },
		username: { type: String, default: '' },
		currentWallet: { type: String, required: true },
		wallets: {
			type: Array,
			default: []
		},
		password: { type: String, required: true },
		transactions: [{
			type: SchemaTypes.ObjectId,
			ref: 'Transaction'
		}]
		// loginSession: { type: SchemaTypes.ObjectId, default: 'Login' }
	},
	{ timestamps: true }
);

const User = model('User', UserSchema);

export default User;
