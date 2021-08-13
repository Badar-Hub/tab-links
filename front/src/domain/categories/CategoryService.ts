import { ApiService } from "@/services/ApiServices";
import CategoryModel from "./CategoryModel";

export default class CategoryService {
  static baseUrl = "categories";
  static async getCategories() {
    try {
      const data = await ApiService.get(CategoryService.baseUrl);
      return data.results.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async newCategory(category: CategoryModel) {
    try {
      const data = await ApiService.post(`${CategoryService.baseUrl}`, category);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCategory(category: CategoryModel) {
    try {
      const data = await ApiService.put(
        `${CategoryService.baseUrl}/${category._id}`,
        category
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
