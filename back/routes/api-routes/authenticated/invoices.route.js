import express from 'express';
import { invoices } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/all-invoices', invoices.getAllInvoices);

router.get('/paid-invoices', invoices.getPaidInvoices);

router.get('/unpaid-invoices', invoices.getUnPaidInvoices);

router.post(
	'/',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				type: request.body.type,
				name: request.body.name,
				invoiceNo: request.body.paidValue,
				totalValue: request.body.totalValue,
				paidValue: request.body.paidValue,
			},
			{
				type: 'required|string',
				name: 'required|string',
				invoiceNo: 'required|integer',
				totalValue: 'required|integer',
				paidValue: 'required|integer',x
			},
		);
	},
	invoices.paymentReceving,
);

// router.put(
// 	'/:id',
// 	(request, response, next) => {
// 		validation(
// 			request,
// 			response,
// 			next,
// 			{
// 				sku: request.body.sku,
// 				name: request.body.name,
// 				brand: request.body.brand,
// 				category: request.body.category,
// 				price: request.body.price,
// 				discount: request.body.discount,
// 				costPrice: request.body.costPrice,
// 			},
// 			{
// 				sku: 'required|string',
// 				name: 'required|string',
// 				brand: 'required|string',
// 				category: 'required|string',
// 				price: 'required|integer',
// 				discount: 'required|integer',
// 				costPrice: 'required|integer',
// 			},
// 		);
// 	},
// 	products.updateProductInfo,
// );

module.exports = router;
