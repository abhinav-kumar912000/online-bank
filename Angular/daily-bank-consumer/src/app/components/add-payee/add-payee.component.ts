import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-payee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  payeeForm: FormGroup;
  accountNumber: string | any;
  successMessage: string | null = null; // Success message

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthenticationService) {
    this.payeeForm = this.fb.group({
      name: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nickname: [''],
      confirmAccountNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.accountNumber = this.authService.getAccountNumber(); 
  }

  addPayee(): void {
    if (this.payeeForm.valid) {
      const payeeData = { payee: this.payeeForm.value };
      this.http.post(`http://localhost:8085/api/account/${this.accountNumber}/payee`, payeeData)
        .subscribe({
          next: () => {
            this.successMessage = 'Payee added successfully!'; // Set success message
            this.payeeForm.reset();
            setTimeout(() => this.successMessage = null, 3000); // Clear message after 3 seconds
          },
          error: (error) => console.error('Error adding payee', error)
        });
    }
  }
}
