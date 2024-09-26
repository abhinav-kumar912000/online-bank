import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AuthenticationService } from '../../services/authentication.service';  // Import AuthenticationService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  accountDetails: any;
  accountSummary: any;
  transactions: any[] = [];
  recentTransaction: any;
  selectedView: 'details' | 'summary' | 'transactions' | 'recent' | null = null;
  successMessage: string | null = null;


  constructor(
    private accountService: AccountService, 
    private authService: AuthenticationService,  // Use AuthenticationService instead of UserService
  ) {}

  getAccountDetails(): void {
    const accountNumber = this.authService.getAccountNumber();  // Use getAccountNumber from AuthenticationService
    if (!accountNumber) {
      console.error('No account number found.');
      return;
    }
    this.accountService.getAccountDetails(accountNumber).subscribe(
      data => {
        this.accountDetails = data;
        this.selectedView = 'details';
      },
      error => {
        console.error('Error fetching account details', error);
      }
    );
  }

  getAccountSummary(): void {
    const accountNumber = this.authService.getAccountNumber();  // Use getAccountNumber from AuthenticationService
    if (!accountNumber) {
      console.error('No account number found.');
      return;
    }
    this.accountService.getAccountSummary(accountNumber).subscribe(
      data => {
        this.accountSummary = data;
        this.selectedView = 'summary';
      },
      error => {
        console.error('Error fetching account summary', error);
      }
    );
  }

  getTransactions(): void {
    const accountNumber = this.authService.getAccountNumber();  // Use getAccountNumber from AuthenticationService
    if (!accountNumber) {
      console.error('No account number found.');
      return;
    }
    this.accountService.getTransactionDetails(accountNumber).subscribe(
      data => {
        this.transactions = data;
        this.selectedView = 'transactions';
      },
      error => {
        console.error('Error fetching transactions', error);
      }
    );
  }


}
