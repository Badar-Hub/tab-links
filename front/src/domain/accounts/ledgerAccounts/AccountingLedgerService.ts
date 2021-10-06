import { ApiService } from '@/services/ApiServices';
import AccountingLedgerModel from './AccountingLedgerModel';

export default class AccountingLedgerService {
  static baseUrl = 'accounting-ledger';

  static async getLedgers() {
    try {
      const data = await ApiService.get(
        `${AccountingLedgerService.baseUrl}`
      );
      console.log(data);
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newLedger(ledger: AccountingLedgerModel) {
    try {
      const data = await ApiService.post(`${AccountingLedgerService.baseUrl}`, ledger);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // static async updateBrand(paymentReceving: InvoiceModel) {
  //   try {
  //     const data = await ApiService.put(
  //       `${AccountsService.baseUrl}/${paymentReceving._id}`,
  //       paymentReceving
  //     );
  //     return data.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
