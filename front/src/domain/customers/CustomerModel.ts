export default interface CustomerModel {
  _id?: string;
  name: string;
  phone: string;
  address: string;
  bankName: string;
  accountNo: string;
  openingBalance: number
  balance?: number
  createdAt?: string;
}
