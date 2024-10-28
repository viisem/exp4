import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login data:', this.loginData);
}
}
