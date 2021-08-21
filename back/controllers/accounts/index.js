import { getAllInvoices } from './helpers/getAllInvoices';
import { getPaidInvoices } from './helpers/getPaidInvoices';
import { getUnPaidInvoices } from './helpers/getUnPaidInvoices';
import { paymentReceving } from './helpers/paymentReceving';
import { createInvoice } from './helpers/createInvoice';

export const invoices = {
	getAllInvoices,
	getPaidInvoices,
	getUnPaidInvoices,
	paymentReceving,
	createInvoice,
};
