import mongoose from 'mongoose';

const Warehouse = new mongoose.Schema({
	name: {
		type: String,
	},
	address: {
		type: String,
	},
	phone: {
		type: Number,
	},
	inCharge: {
		type: String
	},
	cratedAt: {
		type: String,
	},
});

export const WarehouseSchema = mongoose.model(
	'Warehouse',
	Warehouse,
	'warehouse',
);
