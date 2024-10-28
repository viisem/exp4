import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    console.log('Signup data:', this.signupData);
  }
}
