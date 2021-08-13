import { logger, sendSuccess, sendError } from '~/utils';
import { ProductSchema } from '~/schemas/Product';

export const getProducts = async (_, response) => {
	try {
		const products = await ProductSchema.find();

		if (!products) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: products }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
