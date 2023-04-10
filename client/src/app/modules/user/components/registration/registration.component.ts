import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerForm = new FormGroup({
    firstName:new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    lastName:new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email:new FormControl(null, [Validators.email, Validators.minLength(5), Validators.maxLength(100), Validators.required]),
    userName:new FormControl(null, [Validators.minLength(5), Validators.maxLength(30), Validators.required]),
    password:new FormControl(null, [Validators.minLength(8), Validators.maxLength(1024), Validators.required]),
  
  })


subbmitRegisterForm(registerForm:FormGroup){
  alert('hello')
  console.log(registerForm)
}


  constructor() {}


}
