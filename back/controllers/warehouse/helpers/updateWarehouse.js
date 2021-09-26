import { logger, sendSuccess, sendError } from '~/utils';
import { WarehouseSchema } from '~/schemas/Warehouse';

export const updateWarehouseInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { name, address, phone } = request.body;

		const warhouse = await WarehouseSchema.findById(id);
		if (!warhouse) {
			throw new Error("Warhouse with this ID does't exist");
		}

		const checkName = await WarehouseSchema.findOne({ name });
		if (checkName) {
			throw new Error('Warehouse with this name already exist');
		}

		const updateWarehouse = await WarehouseSchema.updateOne({
			_id: id,
			$set: {
				name,
				address,
				phone,
			},
		});

		//  Sending response in case everything went well!
		return sendSuccess({ data: updateWarehouse }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
