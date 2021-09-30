import ProductsModel from '@/interfaces/ProductsModel';

export default interface WarehouseModel {
    _id?: string,
    name: string,
    inCharge: string,
    phone: number,
    address: string
    products?: Array<ProductsModel>
}