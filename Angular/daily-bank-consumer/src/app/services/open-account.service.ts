import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAccountService {
  private apiUrl = 'http://localhost:8085/api/account/open'; // Your API endpoint

  constructor(private http: HttpClient) {}

  createAccount(account: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, account);
  }
}
