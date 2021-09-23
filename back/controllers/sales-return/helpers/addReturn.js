import { logger, sendSuccess, sendError } from '~/utils';
import { ReturnSchema } from '~/schemas/SalesReturn';
import { CustomerSchema } from '~/schemas/Customer';
import { InvoiceSchema } from '~/schemas/Invoice';

export const newReturn = async (request, response) => {
	try {
		const {
			returnNumber,
			customerName,
			invoiceNo,
			date,
			reference,
			products,
			totalValue,
		} = request.body;

		const checkReturnNumber = await ReturnSchema.findOne({ returnNumber });
		if (checkReturnNumber) {
			throw new Error(
				'Sales Return with this return number already exist',
			);
		}

		const checkInvoice = await InvoiceSchema.findOne({ invoiceNo });
		if (!checkInvoice) {
			throw new Error("Invoice with this invoice number doesn't exist");
		}

        const checkCustomer = await CustomerSchema.findOne({
			name: customerName,
		});

		if (!checkCustomer) {
			throw new Error("Customer with this name doesn't exist");
		}

		const newReturnData = new ReturnSchema({
			returnNumber,
			customerName,
			invoiceNo,
			date,
			reference,
			products,
			totalValue,
			createdAt: new Date().toISOString(),
		});

		await newReturnData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newReturnData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
