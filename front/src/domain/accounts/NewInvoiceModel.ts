export default interface NewInvoiceModel {
    _id?: string;
    customerName: string;
    invoiceNo: number;
    date: string;
    reference?: string;
    products: Array<any>;
    totalValue: number;
    createdAt?: string;
}
