import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../interfaces/admin';
import { FormControl , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

Admin : Admin | undefined;
loginForm = new FormGroup({
  UserName : new FormControl(null,[
    Validators.required , Validators.minLength(3), Validators.maxLength(10)
  ]),
  password : new FormControl(null,[
    Validators.required
  ]),

})
constructor(private _router: Router){}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
submitLoginForm(loginForm:FormGroup){
  this._router.navigate(['/admin/profile'])
}

}
