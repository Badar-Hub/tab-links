import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';
import { ProductSchema } from '~/schemas/Product';
import { VendorSchema } from '~/schemas/Accounts';

export const receiveProduct = async (request, response) => {
	try {
		const { vendor, invoiceNo, date, reference, products } = request.body;

		const checkInvoiceNo = await InventorySchema.findOne({ invoiceNo });
		if (checkInvoiceNo) {
			throw new Error('Invalid Invoice No');
		}

		const checkVendor = await VendorSchema.findOne({
			name: vendor,
		});

		if (!checkVendor) {
			throw new Error('Vendor Not Found');
		}

		const totalPriceArr = [];

		products.forEach(async (element) => {
			const { name, quantity } = element;
			const product = await ProductSchema.findOne({ name });
			totalPriceArr.push(
				product.discount
					? product.discount * quantity
					: product.price * quantity,
			);
			await ProductSchema.updateOne(
				{ name },
				{
					$set: {
						quantity: product.quantity + quantity,
					},
				},
			);
		});

		const updateVendor = await VendorSchema.updateOne(
			{ name: vendor.name },
			{
				$inc: {
					balance: totalPriceArr.reduce((a, b) => a + b),
				},
			},
		);

		console.log(updateVendor);

		const newInventoryData = new InventorySchema({
			vendor,
			invoiceNo,
			date,
			reference,
			products,
			createdAt: new Date().toISOString(),
		});

		await newInventoryData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newInventoryData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
