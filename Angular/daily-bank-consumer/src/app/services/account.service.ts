import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define interfaces for your data models
export interface AccountDetails {
  accountNumber: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fatherName: string;
  email: string;
  mobile: string;
  adhar: string;
  dob: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
}

export interface AccountSummary {
  accountHolderName: string;
  balance: number;
  recentTransactions: any[]; // Adjust type as needed
}

export interface Transaction {
  totalAmount: any;
  fromAccount: string;
  toAccount: string;
  amount: number;
  type: string;
  transactionDate: string;
  remark: string;
}

export interface RecentTransaction {
  fromAccount: string;
  toAccount: string;
  amount: number;
  type: string;
  totalAmount:number;
  transactionDate: string;
  remark: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8085/api/account'; // Base URL for API

  constructor(private http: HttpClient) {}

  // Get account details by account number
  getAccountDetails(accountNumber: string): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${this.baseUrl}/${accountNumber}`);
  }

  // Get account summary by account number
  getAccountSummary(accountNumber: string): Observable<AccountSummary> {
    return this.http.get<AccountSummary>(`${this.baseUrl}/summary/${accountNumber}`);
  }

  // Get transactions for an account number
  getTransactionDetails(accountNumber: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/${accountNumber}/transactions`);
  }

  // Get the most recent transaction
  getRecentTransaction(accountNumber: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/recent-transaction/${accountNumber}`);
  }

}