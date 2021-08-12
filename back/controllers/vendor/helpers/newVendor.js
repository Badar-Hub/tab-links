import { logger, sendSuccess, sendError } from '~/utils';
import { VendorSchema } from '~/schemas/Vendor';

export const newVendor = async (request, response) => {
	try {
		const { name, phone, bankName, accountNo, address, openingBalance } =
			request.body;

		const checkName = await VendorSchema.findOne({ name });
		if (checkName) {
			throw new Error('Vendor with this name already exist');
		}

		const newVendorData = new VendorSchema({
			name,
			phone,
			bankName,
			accountNo,
			address,
			openingBalance,
			balance: openingBalance,
			createdAt: new Date().toISOString(),
		});

		await newVendorData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newVendorData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
