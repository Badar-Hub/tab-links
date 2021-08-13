import { ApiService } from "@/services/ApiServices";
import ProductModel from "./ProductModel";

export default class ProductService {
  static baseUrl = "products";
  static async getProducts() {
    try {
      const data = await ApiService.get(ProductService.baseUrl);
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newProducts(product: ProductModel) {
    try {
      const data = await ApiService.post(`${ProductService.baseUrl}`, product);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProduct(product: ProductModel) {
    try {
      const data = await ApiService.put(
        `${ProductService.baseUrl}/${product._id}`,
        product
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
