import { logger, sendSuccess, sendError } from '~/utils';
import { InvoiceSchema } from '~/schemas/Invoice';
import { ProductSchema } from '~/schemas/Product';

export const createInvoice = async (request, response) => {
	const { customerName, invoiceNo, date, reference, products } = request.body;
	try {
		const invoice = await InvoiceSchema.findOne({ invoiceNo });

		if (!invoice) {
			throw new Error('Invalid request');
		}

		const totalValues = [];

		products.forEach(async (element) => {
			const { name, quantity } = element;
			try {
				const product = await ProductSchema.findOne({ name });
				totalValues.push(product.price * quantity);
			} catch (error) {
				console.log(error);
			}
		});

		const newInvoice = new InvoiceSchema({
			customerName,
			invoiceNo,
			date,
			reference,
			products,
			totalValue: totalValues.reduce((a, b) => a + b),
		});

		await newInvoice.save();

		return sendSuccess({ data: newInvoice }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
