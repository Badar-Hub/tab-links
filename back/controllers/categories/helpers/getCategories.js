import { logger, sendSuccess, sendError } from '~/utils';
import { CategorySchema } from '~/schemas/Category';

export const getCategories = async (_, response) => {
	try {
		const categories = await CategorySchema.find();

		if (!categories) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: categories }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
