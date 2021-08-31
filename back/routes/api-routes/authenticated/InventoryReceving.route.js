import express from 'express';
import { inventory } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', inventory.inventoryList);

router.post(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				vendor: request.body.vendor,
				invoiceNo: request.body.invoiceNo,
				reference: request.body.reference,
				date: request.body.date,
				products: request.body.products,
			},
			{
				vendor: 'required|string',
				invoiceNo: 'required|number',
				reference: 'required|string',
				date: 'required|string',
				products: 'required',
			},
		);
	},
	inventory.receiveProduct,
);

router.put(
	'/:id',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				vendor: request.body.vendor,
				invoiceNo: request.body.invoiceNo,
				reference: request.body.reference,
				date: request.body.date,
				products: request.body.products,
			},
			{
				vendor: 'required|string',
				invoiceNo: 'required|number',
				reference: 'required|string',
				date: 'required|string',
				products: 'required',
			},
		);
	},
	inventory.updateRecevingInfo,
);

module.exports = router;
