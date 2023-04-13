import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  email = ""
  password = ""
  wrongData = false
  isLogged = false;
  userImage = "";
constructor(private _AuthService:AuthService, private _Router: Router){
      this._AuthService.saveUser()
      if(this._AuthService.currentUser.getValue() != null){
        this.getData()
        this.isLogged = true;    
      }
      else
        this.isLogged = false
}

onSubmit(Form: NgForm) {
  this._AuthService.login(Form.value).subscribe(
  data => {
    this.wrongData = false;
    this._AuthService.currentUser.subscribe(()=>{

      if(this._AuthService.currentUser.getValue() != null){
        this.isLogged = true     
      }
      this.isLogged = true  
      window.location.reload();
    })
  },
  error => {
    if (error instanceof HttpErrorResponse) {
      this.wrongData = true;
    }
  }
  )}


getData(){
  this._AuthService.getUserById(this._AuthService.currentUserId).subscribe(
    data => {
      this.userImage = data.image
    },
    error => {
      return
}


  )}


logOut(){
  localStorage.removeItem("token");
}
}
