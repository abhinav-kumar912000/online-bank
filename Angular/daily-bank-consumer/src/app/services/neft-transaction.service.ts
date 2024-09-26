import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeftTransactionService {

  private baseUrl = 'http://localhost:8085/api/account/neft'; // Adjust based on your backend URL

  constructor(private http: HttpClient) { }

  performNeftTransaction(transactionData: any): Observable<any> {
    return this.http.post(this.baseUrl, transactionData);
  }
}