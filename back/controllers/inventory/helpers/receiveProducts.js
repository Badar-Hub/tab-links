import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';
import { ProductSchema } from '~/schemas/Product';

export const receiveProduct = async (request, response) => {
	try {
		const { vendor, invoiceNo, date, reference, products } = request.body;

		const checkInvoiceNo = await InventorySchema.findOne({ invoiceNo });
		if (checkInvoiceNo) {
			throw new Error('Invalid Invoice No');
		}

		products.forEach(async (element) => {
			const { name, quantity } = element;
			const product = await ProductSchema.findOne({ name });
			await ProductSchema.updateOne(
				{ name },
				{
					$set: {
						quantity: product.quantity + quantity,
					},
				},
			);
		});

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
