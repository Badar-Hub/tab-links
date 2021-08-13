import mongoose from 'mongoose';

const Brand = new mongoose.Schema({
	name: {
		type: String,
	},
	createdAt: {
		type: String,
	},
});

export const BrandSchema = mongoose.model('Brand', Brand, 'brands');
