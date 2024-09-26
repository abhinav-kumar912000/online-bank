import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-payees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-payees.component.html',
  styleUrl: './get-payees.component.css'
})
export class GetPayeesComponent implements OnInit {
  payees: any[] = [];
  accountNumber: string | any;

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.accountNumber = this.authService.getAccountNumber(); // Get account number
    this.getPayees();
  }

  getPayees(): void {
    this.http.get(`http://localhost:8085/api/account/${this.accountNumber}/payees`)
      .subscribe({
        next: (response: any) => this.payees = response,
        error: (error) => console.error('Error fetching payees', error)
      });
  }
}