import mongoose from 'mongoose';

const Return = new mongoose.Schema({
	returnNumber: {
		type: Number
	},
	customerName: {
		type: String,
	},
	invoiceNo: {
		type: String,
	},
	date: {
		type: String,
	},
	reference: {
		type: String,
	},
	products: [
		{
			name: {
				type: String,
			},
			quantity: {
				type: Number,
			},
		},
	],
	totalValue: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: String,
	},
});

export const ReturnSchema = mongoose.model('SalesReturn', Return, 'sales-return');
