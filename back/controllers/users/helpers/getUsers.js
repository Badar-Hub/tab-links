import { logger, sendSuccess, sendError } from '~/utils';
import { UserSchema } from '~/schemas/User';

export const getUsers = async (_, response) => {
	try {
		const data = await UserSchema.find();
		const users = data.map(user => user.email)

		return sendSuccess({ data: users }, response);
	} catch (exception) {
		logger('error', 'Error:', exception.message);
		return sendError('Internal Server Error', response, exception);
	}
};
