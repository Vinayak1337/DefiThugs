import mongoose from 'mongoose';
const { Schema, model, SchemaTypes } = mongoose;

const TransactionSchema = new Schema(
	{
		sender: {
			type: SchemaTypes.ObjectId,
			ref: 'User'
		},
		receiver: {
			type: SchemaTypes.ObjectId,
			ref: 'User'
		},
		amount: {
			type: Number,
			required: true
		},
		status: {
			type: String,
			enum: ['pending', 'success', 'failed'],
			default: 'pending'
		}
		// fee: {
		// 	type: SchemaTypes.ObjectId,
		// 	ref: 'Fee'
		// }
	},
	{ timestamps: true }
);

const Transaction = model('Transaction', TransactionSchema);

export default Transaction;
