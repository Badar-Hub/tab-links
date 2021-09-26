import express from 'express';
import { inventory } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', inventory.inventoryList);

router.get('/:id', inventory.getItem);

router.post(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				vendorName: request.body.vendorName,
				receivingNumber: request.body.receivingNumber,
				reference: request.body.reference,
				date: request.body.date,
				products: request.body.products,
				totalValue: request.body.totalValue,
			},
			{
				vendorName: 'required|string',
				receivingNumber: 'required|integer',
				reference: 'required|string',
				date: 'required|string',
				products: 'required',
				totalValue: 'required|string',
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
				id: request.headers.id,
				vendorName: request.body.vendorName,
				receivingNumber: request.body.receivingNumber,
				reference: request.body.reference,
				date: request.body.date,
				products: request.body.products,
				totalValue: request.body.totalValue,
			},
			{
				id: 'required|string',
				vendorName: 'required|string',
				receivingNumber: 'required|integer',
				reference: 'required|string',
				date: 'required|string',
				products: 'required',
				totalValue: 'required|string',
			},
		);
	},
	inventory.updateRecevingInfo,
);

module.exports = router;
