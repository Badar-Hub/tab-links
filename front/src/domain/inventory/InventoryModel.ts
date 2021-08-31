import ProductModel from "./ProductModel"

export default interface InventoryModel {
  _id?: string;
  vendor: string;
  invoiceNo: number;
  date: string;
  reference: string;
  products: Array<ProductModel>
}
