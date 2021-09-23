import express from 'express';
import { salesReturn } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', salesReturn.getReturns);

router.get(
	'/:id',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				id: request.headers.id,
			},
			{
				id: 'required|string',
			},
		);
	},
	salesReturn.getReturn,
);

router.post(
	'/new-return',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				returnNumber: request.body.returnNumber,
				customerName: request.body.customerName,
				invoiceNo: request.body.invoiceNo,
				date: request.body.date,
				products: request.body.products,
				totalValue: request.body.totalValue,
			},
			{
				returnNumber: 'required|integer',
				customerName: 'required|string',
				invoiceNo: 'required|integer',
				products: 'required',
				totalValue: 'required|integer',
			},
		);
	},

	salesReturn.newReturn,
);
module.exports = router;
