import express from 'express';
import { invoices } from '~/controllers';
import { validate as validation } from '~/middlewares';

const router = express.Router();

router.get('/all-invoices', invoices.getAllInvoices);

router.get('/paid-invoices', invoices.getPaidInvoices);

router.get('/unpaid-invoices', invoices.getUnPaidInvoices);

router.get('/invoices/:id', invoices.getInvoice);

router.get('/invoices', invoices.getInvoices);

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
				invoiceNo: request.body.invoiceNo,
				totalValue: request.body.totalValue,
				paidValue: request.body.paidValue,
			},
			{
				type: 'required|string',
				name: 'required|string',
				invoiceNo: 'required|integer',
				totalValue: 'required|integer',
				paidValue: 'required|integer',
			},
		);
	},
	invoices.paymentReceving,
);

router.post(
	'/create-invoice',
	(request, response, next) => {
		validation(
			request,
			response,
			next,
			{
				customerName: request.body.customerName,
				date: request.body.date,
				invoiceNo: request.body.invoiceNo,
				products: request.body.products,
				totalValue: request.body.totalValue,
			},
			{
				customerName: 'required|string',
				date: 'required|string',
				invoiceNo: 'required|integer',
				products: 'required',
				totalValue: 'required|integer',
			},
		);
	},
	invoices.createInvoice,
);
module.exports = router;
