import { ApiService } from "@/services/ApiServices";
import InventoryModel from './InventoryModel';

export default class InventoryService {
  static baseUrl = "inventory";

  static async getInventoryList() {
    try {
      const data = await ApiService.get(InventoryService.baseUrl);
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async receiveProducts(item: InventoryModel) {
    try {
      const data = await ApiService.post(`${InventoryService.baseUrl}`, item);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateReceiving(item: InventoryModel) {
    try {
      const data = await ApiService.put(
        `${InventoryService.baseUrl}/${item._id}`,
        item
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
