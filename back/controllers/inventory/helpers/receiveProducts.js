import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';
import { ProductSchema } from '~/schemas/Product';
import { VendorSchema } from 'schemas/Vendor';

export const receiveProduct = async (request, response) => {
	try {
		const { vendor, invoiceNo, date, reference, products } = request.body;

		const checkInvoiceNo = await InventorySchema.findOne({ invoiceNo });
		if (checkInvoiceNo) {
			throw new Error('Invalid Invoice No');
		}

		const total = []

		products.forEach(async (element) => {
			const { name, quantity, costPrice } = element;
			total.push((quantity * costPrice))
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

		const totalValue = total.reduce((a, b) => a + b)
		
		await VendorSchema.updateOne({name: vendor}, {
			$inc: {
				balance: totalValue
			}
		})
 		
		const newInventoryData = new InventorySchema({
			vendor,
			invoiceNo,
			date,
			reference,
			products,
			totalValue,
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