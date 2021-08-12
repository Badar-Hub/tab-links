import { ApiService } from "@/services/ApiServices";
import VendorModel from './VendorModel';

export default class VendorService {
    static baseUrl = "vendors";
    static async getVendors() {
        try {
            const data = await ApiService.get(VendorService.baseUrl);
            return data.results.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async newVendor(vendor: VendorModel) {
        try {
            const data = await ApiService.post(`${VendorService.baseUrl}`, vendor);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateVendor(vendor: VendorModel) {
        try {
            const data = await ApiService.put(`${VendorService.baseUrl}/${vendor._id}`, vendor);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
