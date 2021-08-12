import express from 'express';
import { vendors } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', vendors.getVendors);

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
	vendors.newVendor,
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
	vendors.updateVendorInfo,
);

module.exports = router;
