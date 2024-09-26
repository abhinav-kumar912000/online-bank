import { Component } from '@angular/core';
import { OpenAccountService } from '../../services/open-account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css'],
})
export class OpenAccountComponent {
  account = {
    personalDetails: { 
      title: '', 
      firstName: '', 
      middleName: '', 
      lastName: '', 
      fatherName: '', 
      mobile: '', 
      email: '', 
      adhar: '', 
      dob: '' 
    },
    address: { 
      addressLine1: '', 
      addressLine2: '', 
      landmark: '', 
      state: '', 
      city: '', 
      pincode: '' 
    }
  };
  submissionMessage: string = '';

  constructor(
    private openAccountService: OpenAccountService,
    private router: Router
  ) {}

  onSubmit(accountForm: any) {
    if (accountForm.valid) {
      this.openAccountService.createAccount(this.account).subscribe(
        response => {
          const accountNumber = response.accountNumber;
          console.log('Account submitted successfully:', response);
          this.submissionMessage = `Account opened Successfully. Your Account Number is ${accountNumber}.`;
          this.resetForm();  // Reset form fields
          accountForm.resetForm();  // Reset form state, clear touched fields
        },
        error => {
          console.error('Error submitting account:', error);
          this.submissionMessage = error.error?.message || error.message || 'Error submitting account. Please try again.';
        }
      );
    } else {
      // Mark all fields as touched to show validation messages
      Object.keys(accountForm.controls).forEach(field => {
        const control = accountForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
      this.submissionMessage = ''; // Clear submission message on invalid submit
    }
  }

  resetForm() {
    this.account = { 
      personalDetails: { 
        title: '', 
        firstName: '', 
        middleName: '', 
        lastName: '', 
        fatherName: '', 
        mobile: '', 
        email: '', 
        adhar: '', 
        dob: '' 
      },
      address: { 
        addressLine1: '', 
        addressLine2: '', 
        landmark: '', 
        state: '', 
        city: '', 
        pincode: '' 
      }
    };
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
