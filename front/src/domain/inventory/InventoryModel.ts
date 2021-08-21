import ProductModel from "./ProductModel"

export default interface InventoryModel {
  _id?: string;
  vendor: string;
  invoiceNo: string;
  date: string;
  reference: string;
  products: Array<ProductModel>
}
