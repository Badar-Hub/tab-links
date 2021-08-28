import { getAllInvoices } from './helpers/getAllInvoices';
import { getInvoice } from './helpers/getInvoice';
import { getInvoices } from './helpers/getInvoices';
import { getPaidInvoices } from './helpers/getPaidInvoices';
import { getUnPaidInvoices } from './helpers/getUnPaidInvoices';
import { paymentReceving } from './helpers/paymentReceving';
import { createInvoice } from './helpers/createInvoice';

export const invoices = {
	getAllInvoices,
	getInvoice,
	getInvoices,
	getPaidInvoices,
	getUnPaidInvoices,
	paymentReceving,
	createInvoice,
};
