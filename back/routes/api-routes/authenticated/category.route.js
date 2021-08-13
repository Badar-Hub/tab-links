import express from 'express';
import { categories } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/', categories.getCategories);

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
	categories.newCategory,
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
	categories.updateCategoryInfo,
);

module.exports = router;
