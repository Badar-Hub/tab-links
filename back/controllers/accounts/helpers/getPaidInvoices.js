import { logger, sendSuccess, sendError } from '~/utils';
import { AccountSchema } from '~/schemas/Accounts';

export const getPaidInvoices = async (_, response) => {
	try {
		const invoices = await AccountSchema.find();

		if (!invoices) {
			throw new Error('Invalid request');
		}

        const paidInvoices = invoices.filter(invoice => invoice.isPaid)

		return sendSuccess({ data: paidInvoices }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
