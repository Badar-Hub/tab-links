import mongoose from 'mongoose';

const Account = new mongoose.Schema({
	type: {
		type: String,
	},
	name: {
		type: String,
	},
	invoiceNo: {
		type: Number,
		default: 0,
	},
	totalValue: {
		type: Number,
		default: 0,
	},
	paidValue: {
		type: Number,
		default: 0,
	},
	isPaid: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: String,
	},
});

export const AccountSchema = mongoose.model('Account', Account, 'accounts');
