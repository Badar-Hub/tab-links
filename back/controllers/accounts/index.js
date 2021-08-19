import { getAllInvoices } from './helpers/getAllInvoices';
import { getPaidInvoices } from './helpers/getPaidInvoices';
import { getUnPaidInvoices } from './helpers/getUnPaidInvoices';
import { paymentReceving } from './helpers/paymentReceving';

export const invoices = {
	getAllInvoices,
	getPaidInvoices,
	getUnPaidInvoices,
	paymentReceving
};
