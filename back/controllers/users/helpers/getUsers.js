import { logger, sendSuccess, sendError } from '~/utils';
import { UserSchema } from '~/schemas/User';

export const getUsers = async (_, response) => {
	try {
		const users = await UserSchema.find();

		return sendSuccess({ data: users }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
