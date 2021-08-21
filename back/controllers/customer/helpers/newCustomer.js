import { logger, sendSuccess, sendError } from '~/utils';
import { CustomerSchema } from '~/schemas/Customer';

export const newCustomer = async (request, response) => {
	try {
		const { name, phone, bankName, accountNo, address, openingBalance } =
			request.body;

		const checkName = await CustomerSchema.findOne({ name });
		if (checkName) {
			throw new Error('Vendor with this name already exist');
		}

		const newCustomerData = new CustomerSchema({
			name,
			phone,
			bankName,
			accountNo,
			address,
			openingBalance,
			balance: openingBalance,
			createdAt: new Date().toISOString(),
		});

		await newCustomerData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newCustomerData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
