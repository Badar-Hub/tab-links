import { logger, sendSuccess, sendError } from '~/utils';
import { AccountSchema } from '~/schemas/Accounts';
import { InventorySchema } from '~/schemas/Inventory';

export const getAllInvoices = async (_, response) => {
	try {
		const invoices = await AccountSchema.find();

		if (!invoices) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: invoices }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
