import { logger, sendSuccess, sendError } from '~/utils';
import { WarehouseSchema } from 'schemas/Warehouse';

export const getWarehouse = async (request, response) => {
	const { id } = request.headers;
	try {
		const warehouse = await WarehouseSchema.findById(id);

		if (!warehouse) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: warehouse }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
