import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { logger } from '~/utils';

dotenv.config();
// Mongoose connection
mongoose
	.connect(process.env.CONNECTION_STRING_MONGO, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.catch((error) => logger('error', 'Mongoose connection Issue:', error));

// Connectivity status on connection establishment
mongoose.connection.on('connected', () =>
	logger('info', 'Mongoose connection:', 'Connection Established'),
);

// Connectivity status on connection resetting
mongoose.connection.on('reconnected', () =>
	logger('info', 'Mongoose connection:', 'Connection Reestablished'),
);

// Connectivity status on disconnection
mongoose.connection.on('disconnected', () =>
	logger('info', 'Mongoose connection:', 'Connection Disconnected'),
);

// Connectivity Status  On connection close
mongoose.connection.on('close', () =>
	logger('info', 'Mongoose connection Issue:', 'Connection Closed'),
);

// Connectivity Status  On error
mongoose.connection.on('error', (error) =>
	logger('error', 'Mongoose connection Issue:', error),
);

export const oMongoose = mongoose;
