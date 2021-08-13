import { logger, sendSuccess, sendError } from '~/utils';
import { ProductSchema, InventorySchema } from '~/schemas';

export const inventoryList = async (_, response) => {
	try {
		const products = await ProductSchema.find();
		const list = await InventorySchema.find();

		const final = []

		const items = products.forEach(product => {
			list.forEach(inventory => )
		}
		}))

		if (!products) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: items }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
