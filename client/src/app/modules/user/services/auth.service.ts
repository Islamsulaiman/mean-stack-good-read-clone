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

  constructor(private _HttpClient:HttpClient,private _router: Router) {}

  saveUser(){
    const token: any = localStorage.getItem('token')
    if(!token) return this.currentUser.next(null);
    this.currentUser.next(jwtDecode(token));
  }
  register(formData: any): Observable<any>{
    return this._HttpClient.post("http://localhost:3000/users", formData)
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