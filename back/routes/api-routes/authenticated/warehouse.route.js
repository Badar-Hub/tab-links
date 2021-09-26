import express from 'express';
import { warehouses } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', warehouses.getWarehouses);

router.get(
	'/:id',
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
	warehouses.getWarehouse,
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
				address: request.body.address,
			},
			{
				name: 'required|string',
				phone: 'required|string',
				address: 'required|string',
			},
		);
	},
	warehouses.newWarehouse,
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
				name: request.body.name,
				phone: request.body.phone,
				address: request.body.address,
			},
			{
				id: 'required|string',
				name: 'required|string',
				phone: 'required|string',
				address: 'required|string',
			},
		);
	},
	warehouses.updateWarehouseInfo,
);

module.exports = router;
