import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email = ""
    password = ""
    isCorrect = false


  onSubmit(Form: NgForm) {
    // this.loginAction()
    // if(!this.auth.isLogged && !this.isCorrect)
    //   this.isCorrect = true
    this.isCorrect = true
    // return true;
  }
}


