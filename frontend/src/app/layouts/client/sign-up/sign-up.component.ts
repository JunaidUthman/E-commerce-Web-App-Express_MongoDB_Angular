import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, Validators  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { ClientManagerServiceService } from '../../../services/clientManagerService/client-manager-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule , CommonModule , RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent{
  email: string = '';
  password: string = '';
  form :FormGroup
  testO : string = 'testO';
  service : ClientManagerServiceService;
  showPopup: boolean = false;
  popupMessage: string = '';

  constructor(private fb : FormBuilder , service : ClientManagerServiceService){
    this.service = service;
    this.form = this.fb.group({
      email : ['' , Validators.required],
      password : ['' , Validators.required]
    })
  }

  createClient(){
    
    this.email = this.form.get('email')?.value;
    this.password = this.form.get('password')?.value;

    this.service.createUser(this.email , this.password).subscribe({
      next: (response) => {
        if(response.alreadyExists){
          this.popupMessage = 'The email you tried to register with already exists.';
          this.showPopup = true;
          return;
        }
        this.showPopup = false;
        console.log('User created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }

  closePopup() {
    this.showPopup = false;
  }

}
