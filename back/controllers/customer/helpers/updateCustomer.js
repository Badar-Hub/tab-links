import { logger, sendSuccess, sendError } from '~/utils';
import { CustomerSchema } from '~/schemas/Customer';

export const updateCustomerInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { name, phone, bankName, accountNo, address } = request.body;

		const customer = await CustomerSchema.findById(id);
		if (!customer) {
			throw new Error("Vendor with this name does't exist");
		}

		if (customer.name !== name) {
			const checkName = await CustomerSchema.findOne({ name });
			if (checkName) {
				throw new Error('Customer with this name already exist');
			}
		}

		const updateCustomer = await CustomerSchema.updateOne({
			_id: id,
			$set: {
				name,
				phone,
				bankName,
				accountNo,
				address,
			},
		});

		//  Sending response in case everything went well!
		return sendSuccess({ data: updateCustomer }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
