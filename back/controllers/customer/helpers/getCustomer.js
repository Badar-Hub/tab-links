import { logger, sendSuccess, sendError } from '~/utils';
import { CustomerSchema } from '~/schemas/Customer';

export const getCustomer = async (request, response) => {
	try {
		const { id } = request.params;
		const customer = await CustomerSchema.findById(id);

		if (!customer) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: customer }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
