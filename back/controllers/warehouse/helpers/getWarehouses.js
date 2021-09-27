import { logger, sendSuccess, sendError } from '~/utils';
import { WarehouseSchema } from 'schemas/Warehouse';

export const getWarehouses = async (_, response) => {
	try {
		const warehouses = await WarehouseSchema.find();

		if (!warehouses) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: warehouses }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
