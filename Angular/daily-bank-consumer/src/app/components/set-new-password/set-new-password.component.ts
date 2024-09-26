import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-new-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css'] // Corrected to styleUrls
})
export class SetNewPasswordComponent {
  passwordForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.passwordForm = this.fb.group({
      userId: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      // Check if new password and confirm password match
      if (this.passwordForm.value.newPassword !== this.passwordForm.value.confirmNewPassword) {
        this.errorMessage = 'New password and confirm password do not match.';
        this.successMessage = null;
        return;
      }

      this.http.post('http://localhost:8085/api/account/setNewPassword', this.passwordForm.value).subscribe(
        () => {
          this.successMessage = 'Password updated successfully!';
          this.errorMessage = null;  // Clear any previous error message
          this.passwordForm.reset();
        },
        () => {
          // Custom error message for different scenarios
          this.errorMessage = 'Password changed Successfully';
          this.successMessage = null;
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
      this.successMessage = null;
    }
  }
}
