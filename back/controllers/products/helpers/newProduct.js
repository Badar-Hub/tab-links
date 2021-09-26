import { logger, sendSuccess, sendError } from '~/utils';
import { ProductSchema } from '~/schemas/Product';

export const newProduct = async (request, response) => {
	try {
		const { sku, brand, category, name } = request.body;

		const checkName = await ProductSchema.findOne({ name });
		if (checkName) {
			throw new Error('Product with this name already exist');
		}

		const checkSku = await ProductSchema.findOne({ sku });
		if (checkSku) {
			throw new Error(
				'This SKU is already associated wih another product',
			);
		}

		const newProductData = new ProductSchema({
			sku,
			brand,
			category,
			name,
			createdAt: new Date().toISOString(),
		});

		await newProductData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newProductData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
