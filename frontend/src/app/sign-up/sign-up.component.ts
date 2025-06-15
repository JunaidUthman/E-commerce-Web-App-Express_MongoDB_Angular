import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, Validators  } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent{
  email: string = '';
  password: string = '';
  form :FormGroup
  testO : string = 'testO';
  service : CrudService;

  constructor(private fb : FormBuilder , service : CrudService){
    this.service = service;
    this.form = this.fb.group({
      email : ['' , Validators.required],
      password : ['' , Validators.required]
    })
  }

  test(){
    
    this.email = this.form.get('email')?.value;
    this.password = this.form.get('password')?.value;

    console.log(this.email);
  }

  testObs(){
    this.service.testObs().subscribe((data) => {
      console.log(data);
    })
  }
}
