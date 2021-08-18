import mongoose from 'mongoose';

const Product = new mongoose.Schema({
	sku: {
		type: String,
	},
	name: {
		type: String,
	},
	brand: {
		type: String,
	},
	category: {
		type: String,
	},
	price: {
		type: Number,
	},
	discount: {
		type: Number,
	},
	quantity: {
		type: Number,
		default: 0
	},
	costPrice: {
		type: Number,
	},
	createdAt: {
		type: String,
	},
});

export const ProductSchema = mongoose.model('Product', Product, 'products');
