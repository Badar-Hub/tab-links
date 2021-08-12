import { logger, sendSuccess, sendError } from '~/utils';
import { BrandSchema } from '~/schemas/Brand';

export const newBrand = async (request, response) => {
	try {
		const { name } = request.body;

		const checkName = await BrandSchema.findOne({ name });
		if (checkName) {
			throw new Error('Brand with this name already exist');
		}

		const newBrandData = new BrandSchema({
			name,
			createdAt: new Date().toISOString(),
		});

		await newBrandData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newBrandData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
