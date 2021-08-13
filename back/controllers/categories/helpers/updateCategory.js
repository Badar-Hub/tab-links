import { logger, sendSuccess, sendError } from '~/utils';
import { CategorySchema } from '~/schemas/Category';

export const updateCategoryInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { name } = request.body;

		const category = await CategorySchema.findById(id);
		if (!category) {
			throw new Error("category with this ID does't exist");
		}

		const checkName = await CategorySchema.findOne({ name });
		if (checkName) {
			throw new Error('Category with this name already exist');
		}

		const updateCategory = await category.updateOne({
			_id: id,
			$set: {
				name,
			},
		});

		//  Sending response in case everything went well!
		return sendSuccess({ data: updateCategory }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
