import { Component } from '@angular/core';
import { SignUpComponent } from '../layouts/client/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ClientManagerServiceService} from '../services/clientManagerService/client-manager-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [SignUpComponent , RouterModule , CommonModule , FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private clientManagerService : ClientManagerServiceService , private router: Router) { }

  email : string = '';
  password : string = '';
  popupMessage: string = '';
  showPopup: boolean = false;
  login(){
    this.clientManagerService.LogUser(this.email , this.password).subscribe({
      next: (response) => {
        // console.log('Login response:', response);
        if (!response.success) {
          // Handle all error cases
          if (response.message === 'User not found.') {
            this.popupMessage = 'This user is not found.';
          } else if (response.message === 'Incorrect password.') {
            this.popupMessage = 'The password you entered is incorrect.';
          } else if (response.message === 'Please verify your email before logging in.') {
            this.popupMessage = 'Please verify your email before logging in.';
          } else {
            this.popupMessage = response.message || 'Login failed.';
          }
          this.showPopup = true;
        } else {
          if(response.isAdmin ==  true) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/Admin/dashboard']);
          }
          else{
            localStorage.setItem('token', response.token);
            this.router.navigate(['/Home']);
          }
          
        }
      },
      error: (error) => {
        this.popupMessage = 'Login error. Please try again.';
        this.showPopup = true;
        console.error('Error logging user:', error);
      }
    });
  }

  isLoggedIn(){
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  
  closePopup() {
    this.showPopup = false;
  }
}
