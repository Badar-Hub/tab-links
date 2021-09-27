import ProductModel from "./ProductModel"

export default interface InventoryModel {
  _id?: string;
  vendorName: string;
  receivingNumber: number;
  date: string;
  reference: string;
  products: Array<ProductModel>
  totalValue: number;
}
