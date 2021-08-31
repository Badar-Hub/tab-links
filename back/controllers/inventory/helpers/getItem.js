import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';

export const getItem = async (request, response) => {
	try {
		const { id } = request.params;
		const item = await InventorySchema.findById(id);

		return sendSuccess({ data: item }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
