import { VendorSchema } from 'schemas/Vendor';
import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';

export const receiveProduct = async (request, response) => {
	try {
		const {
			vendorName,
			receivingNumber,
			date,
			reference,
			products,
			totalValue,
		} = request.body;

		const checkInvoiceNo = await InventorySchema.findOne({
			receivingNumber,
		});
		if (checkInvoiceNo) {
			throw new Error('Invalid Invoice No');
		}

		await VendorSchema.updateOne(
			{ name: vendorName },
			{
				$inc: {
					balance: totalValue,
				},
			},
		);

		const newInventoryData = new InventorySchema({
			vendorName,
			receivingNumber,
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
