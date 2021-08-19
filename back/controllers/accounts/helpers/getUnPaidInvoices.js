import { logger, sendSuccess, sendError } from '~/utils';
import { AccountSchema } from '~/schemas/Accounts';

export const getUnPaidInvoices = async (_, response) => {
	try {
		const invoices = await AccountSchema.find();

		if (!invoices) {
			throw new Error('Invalid request');
		}

        const unPaidInvoices = invoices.filter(invoice => !invoice.isPaid)
        
		return sendSuccess({ data: unPaidInvoices }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
