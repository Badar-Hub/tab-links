import { logger, sendSuccess, sendError } from '~/utils';
import { BrandSchema } from '~/schemas/Brand';

export const getBrands = async (_, response) => {
	try {
		const brands = await BrandSchema.find();

		if (!brands) {
			throw new Error('Invalid request');
		}
		return sendSuccess({ data: brands }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
