import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'any'
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  currentUserId: any;
  URL = 'http://localhost:3000/users';

  constructor(private _HttpClient:HttpClient,private _router: Router) {}

  saveUser(){
    const token: any = localStorage.getItem('token')
    if(!token) return this.currentUser.next(null);
    this.currentUser.next(jwtDecode(token));
  
    if(this.currentUser)
    this.currentUserId = this.currentUser.getValue()
    this.currentUserId = this.currentUserId.id;
  }
  
  register(formData: any, options: any): Observable<any>{
    return this._HttpClient.post(`${this.URL}`, formData, options)
  }

  login(formData: any): Observable<any>{
    return this._HttpClient.post("http://localhost:3000/login", formData).pipe(
      map((response: any) => {
        // Store the token in local storage
        localStorage.setItem('token', response.token);
        // Return the response to the subscriber
        return response;
      })
    )
  }
}