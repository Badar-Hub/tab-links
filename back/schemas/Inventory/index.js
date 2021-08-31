import mongoose from 'mongoose';

const Inventory = new mongoose.Schema({
	vendor: {
		type: String,
	},
	invoiceNo: {
		type: Number,
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
			costPrice: {
				type: Number,
				default: 0,
			},
		},
	],
	totalValue: {
		type: Number,
	},
	createdAt: {
		type: String,
	},
});

export const InventorySchema = mongoose.model(
	'Inventory',
	Inventory,
	'inventory',
);
