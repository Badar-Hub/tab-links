import mongoose from 'mongoose';

const Category = new mongoose.Schema({
	name: {
		type: String,
	},
});

export const CategorySchema = mongoose.model('Category', Category, 'categories');
