export default interface ProductModel {
  _id?: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discount: number;
  costPrice: number;
  createdAt?: string;
}
