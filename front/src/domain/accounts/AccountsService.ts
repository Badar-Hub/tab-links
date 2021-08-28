import { ApiService } from '@/services/ApiServices';
import InvoiceModel from './InvoiceModel';
import NewInvoiceModel from './NewInvoiceModel';

export default class AccountsService {
  static baseUrl = 'accounts';

  static async getAllInvoices() {
    try {
      const data = await ApiService.get(
        `${AccountsService.baseUrl}/all-invoices`
      );
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getInvoice(name: string) {
    try {
      const data = await ApiService.get(
        `${AccountsService.baseUrl}/invoices/${name}`
      );
      return data.results.data.filteredInvoice;
    } catch (error) {
      console.log(error);
    }
  }

  static async getInvoices() {
    try {
      const data = await ApiService.get(
        `${AccountsService.baseUrl}/invoices`
      );
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newPaymentReceving(paymentReceving: InvoiceModel) {
    try {
      const data = await ApiService.post(
        `${AccountsService.baseUrl}`,
        paymentReceving
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newInvoice(invoice: NewInvoiceModel) {
    try {
      const data = await ApiService.post(`${AccountsService.baseUrl}/create-invoice`, invoice);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBrand(paymentReceving: InvoiceModel) {
    try {
      const data = await ApiService.put(
        `${AccountsService.baseUrl}/${paymentReceving._id}`,
        paymentReceving
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
