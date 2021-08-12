import mongoose from 'mongoose';

const Inventory = new mongoose.Schema({
	vendor: {
		type: String,
	},
	grNo: {
		type: String,
	},
	date: {
		type: String,
	},
	reference: {
		type: String,
	},
	products: {
		type: Number,
	},
	totalValue: {
		type: Number,
	},
	createdAt: {
		type: String,
	},
});

export const InventorySchema = mongoose.model('Inventory', Inventory, 'inventory');
