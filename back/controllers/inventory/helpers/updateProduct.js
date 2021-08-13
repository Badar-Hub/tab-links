import { logger, sendSuccess, sendError } from '~/utils';
import { ProductSchema } from '~/schemas/Product';

export const updateProductInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { sku, brand, category, name, price, discount, costPrice } =
			request.body;

		const product = await ProductSchema.findById(id);
		if (!product) {
			throw new Error("Product with this ID does't exist");
		}

		if (product.name !== name) {
			const checkName = await ProductSchema.findOne({ name });
			if (checkName) {
				throw new Error('Product with this name already exist');
			}
		}

		if (product.sku !== sku) {
			const checkSku = await ProductSchema.findOne({ sku });
			if (checkSku) {
				throw new Error('Product with this sku already exist');
			}
		}

		const updateProduct = await ProductSchema.updateOne({
			_id: id,
			$set: {
				sku,
				brand,
				category,
				name,
				price,
				discount,
				costPrice,
			},
		});

		//  Sending response in case everything went well!
		return sendSuccess({ data: updateProduct }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
