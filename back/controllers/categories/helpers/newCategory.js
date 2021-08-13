import { logger, sendSuccess, sendError } from '~/utils';
import { CategorySchema } from '~/schemas/Category';

export const newCategory = async (request, response) => {
	try {
		const { name } = request.body;

		const checkName = await CategorySchema.findOne({ name });
		if (checkName) {
			throw new Error('Category with this name already exist');
		}

		const newCategoryData = new CategorySchema({
			name,
			createdAt: new Date().toISOString(),
		});

		await newCategoryData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newCategoryData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
