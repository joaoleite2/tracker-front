export interface Transaction {
  id: number;
  name: string;
  paymentMethod: 'PIX' | 'CASH' | 'CREDIT_CARD' | 'DEBIT_CARD';
  amount: number;
  observation?: string;
  date: string;
}

export interface File {
  id: number;
  name: string;
  transactions: Transaction[];
}

export interface Folder {
  id: number;
  name: string;
  files: File[];
}