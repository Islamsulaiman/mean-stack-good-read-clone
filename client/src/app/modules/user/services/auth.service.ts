import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(formData: any): Observable<any>{
    return this._HttpClient.post("http://localhost:3000/users", formData)
  }


}
