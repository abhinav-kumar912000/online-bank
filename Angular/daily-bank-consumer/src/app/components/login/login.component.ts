import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Using template-driven forms
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { userId: '', loginPassword: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginData.userId && this.loginData.loginPassword) {
      this.authService.login(this.loginData).subscribe({
        next: (response) => {
          // Save token, userId, and account number to session storage
          this.authService.setSession(response.token, response.userId, response.accountNumber);
          this.successMessage = 'Login Success. Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/']); // Redirect after login
          },2000);
        },
        error: (error) => {
          console.error('Login error', error);
          this.errorMessage = 'An error occurred during login.';
        }
      });
    }
  }
}
