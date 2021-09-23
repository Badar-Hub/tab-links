import { logger, sendSuccess, sendError } from '~/utils';
import { ReturnSchema } from '~/schemas/SalesReturn';

export const getReturn = async (request, response) => {
	const { id } = request.headers;
	try {
		if (!id) {
			throw new Error('Invalid Id');
		}

		const data = await ReturnSchema.findById(id);

		if (!data) {
			throw new Error('An Error Occoured');
		}
		//  Sending response in case everything went well!
		return sendSuccess({ data }, response);
	} catch (exception) {
		//  Log in case of any abnormal crash
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
