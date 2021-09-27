import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';

export const updateRecevingInfo = async (request, response) => {
	try {
		const { _id } = request.body;

		const {
			vendorName,
			receivingNumber,
			date,
			reference,
			products,
			totalValue,
		} = request.body;

		const item = await InventorySchema.findById(_id);
		if (!item) {
			throw new Error("Product with this ID does't exist");
		}

		if (item.receivingNumber !== receivingNumber) {
			const checkGR = await InventorySchema.findOne({ receivingNumber });
			if (checkGR) {
				throw new Error(
					'Receving with this Receiving Number already exist',
				);
			}
		}

		const updatedItem = await InventorySchema.updateOne({
			_id,
			$set: {
				vendorName,
				receivingNumber,
				date,
				reference,
				products,
				totalValue,
			},
		});

		//  Sending response in case everything went well!
		return sendSuccess({ data: updatedItem }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
