import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';
import { CustomerSchema } from '~/schemas/Customer';

export const getAllInvoices = async (request, response) => {
	try {
		const invoices = await InventorySchema.find();
		const customers = await CustomerSchema.find();

		if (!invoices) {
			throw new Error('Invalid request');
		}

		return sendSuccess({ data: { invoices, customers } }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
