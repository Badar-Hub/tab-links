import { logger, sendSuccess, sendError } from '~/utils';
import { InvoiceSchema } from '~/schemas/Invoice';

export const getInvoice = async (request, response) => {
	const { id } = request.params;
	try {
		const invoices = await InvoiceSchema.find();

		const filteredInvoice = invoices.filter(
			(invoice) => invoice.customerName === id,
		);

		if (!filteredInvoice) {
			throw new Error('Invalid request');
		}

		return sendSuccess({ data: { filteredInvoice } }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
