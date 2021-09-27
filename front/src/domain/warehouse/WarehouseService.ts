import { ApiService } from "@/services/ApiServices";
import WarehouseModel from './WarehouseModel';

export default class WarehouseService {
    static baseUrl = "warehouse";

    static async getWarehouses() {
        try {
            const data = await ApiService.get(WarehouseService.baseUrl);
            return data.results.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async newWarehouse(warehouse: WarehouseModel) {
        try {
            const data = await ApiService.post(`${WarehouseService.baseUrl}`, warehouse);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateWarehouse(warehouse: WarehouseModel) {
        try {
            const data = await ApiService.put(`${WarehouseService.baseUrl}/${warehouse._id}`, warehouse);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
