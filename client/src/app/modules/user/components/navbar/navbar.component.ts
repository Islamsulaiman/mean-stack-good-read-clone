import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BooksService } from '../../services/books.service';
import { UsersService } from '../../services/users.service';

interface Book{
  _id:string,
  title: string,
  author?: any,
  category?: any,
  description?: string,
  rating?: object,

}

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
  sortedBooks : Book[] = [];
  hasQuery  =false;
constructor(private _AuthService:AuthService, private _Router: Router, private search: BooksService,
            private _UserServ: UsersService
  ){
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
  this._UserServ.getUserById(this._AuthService.currentUserId, 0, 0, {}).subscribe(
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



// Search method
sendData(event: any){
  const query = event.target.value;
  const matchSpaces:any =query.match(/\s*/);
  if(matchSpaces[0] === query){
      this.sortedBooks = []
      this.hasQuery = false
      return;
  }
  this.search.searchForBooks(query.trim()).subscribe((res =>{
      this.sortedBooks = res;
      this.hasQuery = true

  }));
}





}
