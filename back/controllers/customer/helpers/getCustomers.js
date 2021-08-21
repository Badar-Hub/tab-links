import { logger, sendSuccess, sendError } from '~/utils';
import { CustomerSchema } from '~/schemas/Customer';

export const getCustomers = async (_, response) => {
	try {
		const customers = await CustomerSchema.find();

		if (!customers) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: customers }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
