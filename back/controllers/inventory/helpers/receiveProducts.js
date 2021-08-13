import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';

export const receiveProduct = async (request, response) => {
	try {
		const { vendor, grNo, date, reference, products } = request.body;

		// const { sku, brand, category, name, price, discount, costPrice } =
		// 	request.body;

		const checkGrNo = await InventorySchema.findOne({ grNo });
		if (checkGrNo) {
			throw new Error('Invalid Gr No');
		}

		const newInventoryData = new InventorySchema({
			vendor,
			grNo,
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
