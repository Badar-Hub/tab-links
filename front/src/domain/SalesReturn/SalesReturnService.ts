import { ApiService } from "@/services/ApiServices";
import SalesModel from './SalesModel';

export default class SalesReturnService {
  static baseUrl = "sales-return";

  static async getReturns() {
    try {
      const data = await ApiService.get(SalesReturnService.baseUrl);
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newReturn(returnData: SalesModel) {
    try {
      const data = await ApiService.post(`${SalesReturnService.baseUrl}/new-return`, returnData);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProduct(returnData: SalesModel) {
    try {
      const data = await ApiService.put(
        `${SalesReturnService.baseUrl}/${returnData._id}`,
        returnData
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
