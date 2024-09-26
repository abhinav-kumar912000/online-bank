import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NeftTransactionService } from '../../services/neft-transaction.service';
import { AccountService } from '../../services/account.service';  // Import AccountService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neft-transaction',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './neft-transaction.component.html',
  styleUrl: './neft-transaction.component.css'
})
export class NeftTransactionComponent {
  neftForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  recentTransaction: any = null; 
  transactionCompleted: boolean = false; // New flag

  constructor(
    private fb: FormBuilder,
    private neftService: NeftTransactionService,
    private accountService: AccountService
  ) {
    this.neftForm = this.fb.group({
      fromAccount: ['', [Validators.required]],
      toAccount: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      remark: ['']
    });
  }

  onSubmit() {
    if (this.neftForm.valid) {
      this.neftService.performNeftTransaction(this.neftForm.value).subscribe(
        response => {
          this.errorMessage = '';
          this.successMessage = 'NEFT Transaction Successful!';
          
          // Simulate a delay of 2 seconds before fetching the recent transaction
          setTimeout(() => {
            this.getRecentTransaction();
          }, 2000);
        },
        error => {
          this.errorMessage = 'Error in processing NEFT Transaction.';
        }
      );
    }
  }

  getRecentTransaction() {
  const accountNumber = this.neftForm.value.fromAccount; 
  this.accountService.getRecentTransaction(accountNumber).subscribe(
    data => {
      // Map or transform the data if needed
      this.recentTransaction = {
        fromAccount: data.fromAccount, // Adjust as needed
        toAccount: data.toAccount,
        amount: data.amount,
        type: data.type,
        transactionDate: data.transactionDate,
        remark: data.remark
      };
      this.transactionCompleted = true;
    },
    error => {
      console.error('Error fetching recent transaction', error);
    }
  );
}
}