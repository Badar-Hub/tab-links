import { logger, sendSuccess, sendError } from '~/utils';
import { WarehouseSchema } from '~/schemas/Warehouse';
import { UserSchema } from '~/schemas/User';

export const newWarehouse = async (request, response) => {
	try {
		const { name, address, phone, inCharge } = request.body;

		const checkName = await WarehouseSchema.findOne({ name });
		if (checkName) {
			throw new Error('Warehouse with this name already exist');
		}

		const user = await UserSchema.findOne({ name: inCharge });
		if (!user) {
			throw new Error('User Not Found');
		}

		const newWarehouseData = new WarehouseSchema({
			name,
			address,
			phone,
			inCharge,
			createdAt: new Date().toISOString(),
		});

		await newWarehouseData.save();

		//  Sending response in case everything went well!
		return sendSuccess({ data: newWarehouseData }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
