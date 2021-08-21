import { logger, sendSuccess, sendError } from '~/utils';
import { InventorySchema } from '~/schemas/Inventory';

export const updateRecevingInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { vendor, invoiceNo, date, reference, products } = request.body;

		const item = await InventorySchema.findById(id);
		if (!item) {
			throw new Error("Product with this ID does't exist");
		}

		if (item.grMo !== grMo) {
			const checkGR = await InventorySchema.findOne({ grMo });
			if (checkGR) {
				throw new Error('Receving with this GR Number already exist');
			}
		}

		const updatedItem = await InventorySchema.updateOne({
			_id: id,
			$set: {
				vendor,
				invoiceNo,
				date,
				reference,
				products,
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
