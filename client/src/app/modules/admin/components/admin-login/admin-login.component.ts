import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../interfaces/admin';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  wrongData = false
  islogged = false

  constructor(private _router: Router, private _authService:AuthService){
    if(this._authService.currentAdmin.getValue != null) this._router.navigate(['/admin/profile']);  
  }

Admin : Admin | undefined;
loginForm = new FormGroup({
  email  : new FormControl(null,[Validators.required, Validators.email]),
  password : new FormControl(null,[Validators.required]),

});
 


submitLoginForm(loginForm:FormGroup){
  this._authService.login(loginForm.value).subscribe((response) =>{
    this.wrongData = false
    console.log(this.wrongData)
    if (response.message === 'success')
    {
      
      localStorage.setItem("adminToken",response.token);
      this._authService.savecurrentAdmin();

      if(this._authService.currentAdmin.getValue != null)
      {
        this.islogged = true;
        this.wrongData = false
        console.log( this.wrongData)
      }
      
    this.islogged = true ;
    }
    else
    {
      this.islogged = false;
    }

    this._router.navigate(['admin/profile']);
  },
  error => {
    if (error instanceof HttpErrorResponse) {
      this.wrongData = true;
      console.log( this.wrongData)


    }
  }
  )
}

}
