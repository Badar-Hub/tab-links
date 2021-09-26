import express from 'express';
import { products } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', products.getProducts);

router.post(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				sku: request.body.sku,
				name: request.body.name,
				brand: request.body.brand,
				category: request.body.category,
			},
			{
				sku: 'required|string',
				name: 'required|string',
				brand: 'required|string',
				category: 'required|string',
			},
		);
	},
	products.newProduct,
);

router.put(
	'/:id',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				sku: request.body.sku,
				name: request.body.name,
				brand: request.body.brand,
				category: request.body.category,
				price: request.body.price,
				discount: request.body.discount,
				costPrice: request.body.costPrice,
			},
			{
				sku: 'required|string',
				name: 'required|string',
				brand: 'required|string',
				category: 'required|string',
				price: 'required|integer',
				discount: 'required|integer',
				costPrice: 'required|integer',
			},
		);
	},
	products.updateProductInfo,
);

module.exports = router;
