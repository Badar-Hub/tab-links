import express from 'express';
import { customers } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', customers.getCustomers);

router.get(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				id: request.params.id,
			},
			{
				id: 'required|string',
			},
		);
	},
	customers.getCustomer,
);

router.post(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				name: request.body.name,
				phone: request.body.phone,
				bankName: request.body.bankName,
				accountNo: request.body.accountNo,
				address: request.body.address,
				openingBalance: request.body.openingBalance,
			},
			{
				name: 'required|string',
				phone: 'required|string',
				bankName: 'required|string',
				accountNo: 'required|string',
				address: 'required|string',
				openingBalance: 'required|integer',
			},
		);
	},
	customers.newCustomer,
);

router.put(
	'/:id',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				name: request.body.name,
				phone: request.body.phone,
				bankName: request.body.bankName,
				accountNo: request.body.accountNo,
				address: request.body.address,
			},
			{
				name: 'required|string',
				phone: 'required|string',
				bankName: 'required|string',
				accountNo: 'required|string',
				address: 'required|string',
			},
		);
	},
	customers.updateCustomerInfo,
);

module.exports = router;
