import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private apiUrl1 = 'http://localhost:8085/api/account/login';

  // BehaviorSubject to track userId
  private userNameSubject = new BehaviorSubject<string>('');
  userName$ = this.userNameSubject.asObservable(); // Observable to subscribe to
  
  constructor(private http: HttpClient, private router: Router) {
    if (typeof window !== 'undefined') {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        this.userNameSubject.next(userId);
      }
    }
  }

  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  login(loginData: any): Observable<{ token: string, userId: string, accountNumber: string }> {
    return this.http.post<{ token: string, userId: string, accountNumber: string }>(this.apiUrl1, loginData)
      .pipe(
        catchError(error => {
          console.error('Login error', error);
          return throwError(() => new Error('Login failed. Please try again later.'));
        })
      );
  }

  // Session management: Save session data (token, etc.)
  setSession(token: string, userId: string, accountNumber: string): void {
    sessionStorage.setItem('authToken', token);  // Save token
    sessionStorage.setItem('userId', userId);    // Save userId
    sessionStorage.setItem('accountNumber', accountNumber);  // Save account number
    this.userNameSubject.next(userId);           // Update BehaviorSubject for userId
  }

  // Check if a session exists
  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('authToken');
      console.log('Token:', token);
      return token !== null;
    }
    return false;
  }

  getLoggedInUserName() {
    return this.userNameSubject.value;
  }

  // Logout functionality: Clear session data
  logout(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('authToken');   // Clear token from sessionStorage
      sessionStorage.removeItem('userId');      // Clear userId from sessionStorage

      // Reset BehaviorSubject after logout
      this.userNameSubject.next('');
    }
  }

  getAccountNumber(): string | null {
    return sessionStorage.getItem('accountNumber');  // Retrieve account number from sessionStorage
  }
}