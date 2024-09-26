import { Component } from '@angular/core';
import { RegisterForInternetBankingService } from '../../services/register-for-internet-banking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-for-internet-banking',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-for-internet-banking.component.html',
  styleUrls: ['./register-for-internet-banking.component.css']
})
export class RegisterForInternetBankingComponent {
  model: any = {};
  message: string | null = null;

  constructor(private registerService: RegisterForInternetBankingService, private router: Router) {}

  onSubmit(registerForm: any) {  // Passing registerForm from the template
    this.registerService.register(this.model).subscribe({
      next: () => {
        this.message = 'Registration successful!';
        this.model = {}; // Reset the form model
        registerForm.resetForm(); // Reset the form state
      },
      error: (err) => {
        this.message = 'Account Number is not existing.';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}