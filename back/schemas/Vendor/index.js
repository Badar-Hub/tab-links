import mongoose from 'mongoose';

const Vendor = new mongoose.Schema({
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
		type: String
	}
});

export const VendorSchema = mongoose.model('Vendor', Vendor, 'vendors');
