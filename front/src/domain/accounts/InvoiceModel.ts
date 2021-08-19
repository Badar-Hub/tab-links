export default interface InvoiceModel {
    _id?: string;
    type: string;
    name: string;
    invoiceNo: number;
    totalValue: number;
    paidValue: number;
    isPaid: boolean;
    createdAt: string;
}