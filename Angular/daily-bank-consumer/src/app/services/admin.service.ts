import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRequest } from '../admin-request';


@Injectable({
  providedIn: 'root'
})



export class AdminService {
  private apiUrl = 'http://localhost:8085/api/admin';

  constructor(private http: HttpClient) {}

  creditMoney(request: AdminRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/credit`, request);
  }

  debitMoney(request: AdminRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/debit`, request);
  }
}
