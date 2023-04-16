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

  constructor(private _AuthService:AuthService, private _Router: Router) {
      this._AuthService.saveUser();
      if(this._AuthService.currentUser.getValue())
          this._Router.navigate(['/']);
  }

  error= "";

  registerForm = new FormGroup({
    firstName:new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    lastName:new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email:new FormControl(null, [Validators.email, Validators.minLength(5), Validators.maxLength(100), Validators.required]),
    userName:new FormControl(null, [Validators.minLength(5), Validators.maxLength(30), Validators.required]),
    password:new FormControl(null, [Validators.required ]),
  
  })


subbmitRegisterForm(registerForm:FormGroup){
  this._AuthService.register(registerForm.value, {observe: 'response'}).subscribe((res)=>{

    console.log(res)
    console.log(res.body)

     //now we can verify the response success using the status not a massage, so no beed for success massage
    if(res.status === 200){  
      this._Router.navigate(['/login'])

    }else{ 
      this.error = res
    }
  })
}


  


}
