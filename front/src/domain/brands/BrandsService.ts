import { ApiService } from "@/services/ApiServices";
import BrandModel from "./BrandModel";

export default class BrandService {
  static baseUrl = "brands";
  static async getBrands() {
    try {
      const data = await ApiService.get(BrandService.baseUrl);
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newBrand(brand: BrandModel) {
    try {
      const data = await ApiService.post(`${BrandService.baseUrl}`, brand);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBrand(brand: BrandModel) {
    try {
      const data = await ApiService.put(
        `${BrandService.baseUrl}/${brand._id}`,
        brand
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
