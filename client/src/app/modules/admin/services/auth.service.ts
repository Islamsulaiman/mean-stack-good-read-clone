import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode  from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  _httpClient: HttpClient, private _Router: Router) { }

  currentAdmin = new BehaviorSubject(null);
  URL = environment.domain

  savecurrentAdmin()
  {
    const token: any = localStorage.getItem('adminToken')
    if(!token) return this.currentAdmin.next(null);
    this.currentAdmin.next(jwtDecode(token));  
  }



  login(adminData: any): Observable<any>
  {
    return this._httpClient.post(`${this.URL}/admin/login`,adminData);
  }

  logout()
  {
    this.currentAdmin.next(null);
    localStorage.removeItem("adminToken");
    this._Router.navigate(['admin/login'])
  }

}
