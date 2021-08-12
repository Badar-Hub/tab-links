import { logger, sendSuccess, sendError } from '~/utils';
import { VendorSchema } from '~/schemas/Vendor';

export const getVendors = async (_, response) => {
	try {
		const vendors = await VendorSchema.find();

		if (!vendors) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: vendors }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
