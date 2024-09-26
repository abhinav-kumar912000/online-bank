import { Component } from '@angular/core';
import { AdminRequest } from '../../admin-request';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  request: AdminRequest = { accountNumber: '', amount: 0, username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  credit() {
    this.adminService.creditMoney(this.request).subscribe(
      response => {
        this.successMessage = 'Credit successful! New balance: ' + response.totalAmount;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Credit failed';
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