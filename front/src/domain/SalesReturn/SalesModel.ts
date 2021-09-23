import ProductList from './ProductList';

export default interface SalesModel {
    _id?: string,
    returnNumber: number,
    customerName: string,
    invoiceNo: string,
    reference?: string,
    products: Array<ProductList>,
    totalValue: number
}