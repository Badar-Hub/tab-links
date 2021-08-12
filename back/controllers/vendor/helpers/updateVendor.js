import { logger, sendSuccess, sendError } from '~/utils';
import { VendorSchema } from '~/schemas/Vendor';

export const updateVendorInfo = async (request, response) => {
	try {
		const { id } = request.params;

		const { name, phone, bankName, accountNo, address } = request.body;

		const vendor = await VendorSchema.findById(id);
		if (!vendor) {
			throw new Error("Vendor with this name does't exist");
		}

		const updateVendor = await VendorSchema.updateOne({
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
		return sendSuccess({ data: updateVendor }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
