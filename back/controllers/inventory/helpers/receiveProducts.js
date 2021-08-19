import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';
import { ProductSchema } from '~/schemas/Product';

export const receiveProduct = async (request, response) => {
	try {
		const { vendor, invoiceNo, date, reference, products } = request.body;

<<<<<<< Updated upstream
		const checkGrNo = await InventorySchema.findOne({ grNo });
=======
		// const { sku, brand, category, name, price, discount, costPrice } =
		// 	request.body;

		const checkGrNo = await InventorySchema.findOne({ invoiceNo });
>>>>>>> Stashed changes
		if (checkGrNo) {
			throw new Error('Invalid Gr No');
		}

<<<<<<< Updated upstream
		products.forEach(async (product) => {
			const { name, quantity } = product;
			await ProductSchema.updateOne({
				name,
				$set: {
					quantity,
				},
			});
		});

=======
		products.forEach(async(element) => {
			const {name, quantity} = element
			await ProductSchema.updateOne({name, $set: {
				quantity
			}})
		});

		User.update({"created": false}, {"$set":{"created": true}}, {"multi": true}, (err, writeResult) => {

		});


>>>>>>> Stashed changes
		const newInventoryData = new InventorySchema({
			vendor,
			invoiceNo,
			date,
			reference,
			products,
			createdAt: new Date().toISOString(),
		});

		await newInventoryData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newInventoryData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
