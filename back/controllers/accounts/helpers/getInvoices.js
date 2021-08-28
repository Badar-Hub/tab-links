import { logger, sendSuccess, sendError } from '~/utils';
import { InvoiceSchema } from '~/schemas/Invoice';

export const getInvoices = async (_, response) => {
	try {
		const invoices = await InvoiceSchema.find();

		if (!invoices) {
			throw new Error('Invalid request');
		}

		return sendSuccess({ data: invoices }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
