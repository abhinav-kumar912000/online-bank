import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterForInternetBankingService {
  private apiUrl = 'http://localhost:8085/api/account/register'; // Your Spring Boot endpoint

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}