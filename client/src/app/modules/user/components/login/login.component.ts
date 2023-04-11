import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email = ""
    password = ""
    wrongData = false
    isLogged = false;

  constructor(private _AuthService:AuthService, private _Router: Router){
        this._AuthService.saveUser()
        if(this._AuthService.currentUser.getValue())
            this._Router.navigate(['/'])
  }

  onSubmit(Form: NgForm) {
      this._AuthService.login(Form.value).subscribe(
      data => {
        this.wrongData = false;
        this._AuthService.currentUser.subscribe(()=>{
          
          if(this._AuthService.currentUser.getValue != null)
            this.isLogged = true
            
          this.isLogged = true  
          
        })
        this._Router.navigate(['/']);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          this.wrongData = true;
        }
      }
      )
  }
}