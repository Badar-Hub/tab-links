import mongoose from 'mongoose';

const Inventory = new mongoose.Schema({
	vendorName: {
		type: String,
	},
	receivingNumber: {
		type: Number,
	},
	reference: {
		type: String,
	},
	date: {
		type: Date,
	},
	warehouse: {
		type: String,
	},
	products: [
		{
			name: {
				type: String,
			},
			batchNumber: {
				type: String,
			},
			quantity: {
				type: Number,
			},
			costPrice: {
				type: Number,
			},
			salePrice: {
				type: Number,
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
