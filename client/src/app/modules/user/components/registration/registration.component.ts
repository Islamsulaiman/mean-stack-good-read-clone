import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private _AuthService:AuthService, private _Router: Router) {}

  error= "";

  registerForm = new FormGroup({
    firstName:new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    lastName:new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email:new FormControl(null, [Validators.email, Validators.minLength(5), Validators.maxLength(100), Validators.required]),
    userName:new FormControl(null, [Validators.minLength(5), Validators.maxLength(30), Validators.required]),
    password:new FormControl(null, [Validators.required,
    Validators.pattern('^[A-Z][a-z0-9]{4,100}$')]),
  
  })


subbmitRegisterForm(registerForm:FormGroup){
  this._AuthService.register(registerForm.value).subscribe((res)=>{

    console.log(res.status)
    if(res === "success"){
      this._Router.navigate(['/login'])

    }else{ 
      this.error = res
    }
  })
}


  


}
