import mongoose from 'mongoose';

const Customer = new mongoose.Schema({
	name: {
		type: String,
	},
	phone: {
		type: String,
	},
	bankName: {
		type: String,
	},
	accountNo: {
		type: String,
	},
	address: {
		type: String,
	},
	openingBalance: {
		type: Number,
	},
	balance: {
		type: Number,
	},
	createdAt: {
		type: String,
	},
});

export const CustomerSchema = mongoose.model('Customer', Customer, 'customers');
