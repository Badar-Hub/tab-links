import { logger, sendSuccess, sendError } from '~/utils';
import { AccountSchema } from '~/schemas/Accounts';

export const paymentReceving = async (request, response) => {
	const { type, name, invoiceNo, totalValue, paidValue } = request.body
	try {
		const newInvoice = new AccountSchema({
			type,
			name,
			invoiceNo,
			totalValue,
			paidValue,
			isPaid: (totalValue === paidValue),
			createdAt: new Date().toISOString()
		});
        
		return sendSuccess({ data: newInvoice }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
