import mongoose from 'mongoose';

const Account = new mongoose.Schema({
	type: {
		type: String,
	},
	customerName: {
		type: String,
	},
	invoiceNo: {
		type: Number,
	},
	reference: {
		type: String
	},
	totalValue: {
		type: Number,
		default: 0,
	},
	paidValue: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: String,
	},
});

export const AccountSchema = mongoose.model('Account', Account, 'accounts');
