import mongoose from 'mongoose';

const Invoice = new mongoose.Schema({
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
			price: {
				type: Number,
			},
			discount: {
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

export const InvoiceSchema = mongoose.model('Invoice', Invoice, 'invoices');
