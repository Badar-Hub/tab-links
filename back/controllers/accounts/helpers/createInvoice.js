import { logger, sendSuccess, sendError } from '~/utils';
import { InvoiceSchema } from '~/schemas/Invoice';
import { CustomerSchema } from '~/schemas/Customer';

export const createInvoice = async (request, response) => {
	const { customerName, date, reference, products, invoiceNo, totalValue } =
		request.body;
	try {
		const invoice = await InvoiceSchema.findOne({ invoiceNo });

		if (invoice) {
			throw new Error('Invalid request');
		}

		await CustomerSchema.updateOne(
			{ name: customerName },
			{
				$inc: {
					balance: totalValue,
				},
			},
		);

		const newInvoice = new InvoiceSchema({
			customerName,
			invoiceNo,
			date,
			reference,
			products,
			totalValue,
		});

		await newInvoice.save();

		return sendSuccess({ data: newInvoice }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
