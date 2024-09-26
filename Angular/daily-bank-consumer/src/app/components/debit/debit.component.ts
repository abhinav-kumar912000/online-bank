import { Component } from '@angular/core';
import { AdminRequest } from '../../admin-request';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {
  request: AdminRequest = { accountNumber: '', amount: 0, username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  debit() {
    this.adminService.debitMoney(this.request).subscribe(
      response => {
        this.successMessage = 'Debit successful! New balance: ' + response.totalAmount;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Debit failed:' ;
        this.successMessage = '';
      }
    );
  }

  resetForm() {
    this.request = { accountNumber: '', amount: 0, username: '', password: '' };
    this.successMessage = '';
    this.errorMessage = '';
  }
}