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
				date: request.body.date,
				products: request.body.products,
				totalValue: request.body.totalValue,
			},
			{
				vendorName: 'required|string',
				receivingNumber: 'required|integer',
				date: 'required|string',
				products: 'required',
				totalValue: 'required|integer',
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
				_id: request.body._id,
				vendorName: request.body.vendorName,
				receivingNumber: request.body.receivingNumber,
				date: request.body.date,
				products: request.body.products,
				totalValue: request.body.totalValue,
			},
			{
				_id: 'required|string',
				vendorName: 'required|string',
				receivingNumber: 'required|integer',
				date: 'required|string',
				products: 'required',
				totalValue: 'required|integer',
			},
		);
	},
	inventory.updateRecevingInfo,
);

module.exports = router;
