import { ApiService } from "@/services/ApiServices";
import CustomerModel from './CustomerModel';

export default class CustomerService {
    static baseUrl = "customers";
    static async getCustomers() {
        try {
            const data = await ApiService.get(CustomerService.baseUrl);
            return data.results.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCustomer(id: string) {
        try {
            const data = await ApiService.get(`${CustomerService.baseUrl}/${id}`);
            return data.results.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async newCustomer(customer: CustomerModel) {
        try {
            const data = await ApiService.post(`${CustomerService.baseUrl}`, customer);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateCustomer(customer: CustomerModel) {
        try {
            const data = await ApiService.put(`${CustomerService.baseUrl}/${customer._id}`, customer);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
