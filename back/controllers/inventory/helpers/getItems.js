import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';

export const inventoryList = async (_, response) => {
	try {
		const items = await InventorySchema.find()

		return sendSuccess({ data: items }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
