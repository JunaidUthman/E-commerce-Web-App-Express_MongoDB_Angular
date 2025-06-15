import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SignUpComponent , RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
