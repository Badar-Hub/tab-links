import express from 'express';
import { brands } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', brands.getBrands);

router.post(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				name: request.body.name,
			},
			{
				name: 'required|string',
			},
		);
	},
	brands.newBrand,
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
			},
			{
				name: 'required|string',
			},
		);
	},
	brands.updateBrandInfo,
);

module.exports = router;
