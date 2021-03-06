import { logger, sendSuccess, sendError } from '~/utils';
import { BrandSchema } from '~/schemas/Brand';

export const updateBrandInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { name } = request.body;

		const brand = await BrandSchema.findById(id);
		if (!brand) {
			throw new Error("Brand with this ID does't exist");
		}

		const checkName = await BrandSchema.findOne({ name });
		if (checkName) {
			throw new Error('Brand with this name already exist');
		}

		const updateBrand = await BrandSchema.updateOne({
			_id: id,
			$set: {
				name,
			},
		});

		//  Sending response in case everything went well!
		return sendSuccess({ data: updateBrand }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
