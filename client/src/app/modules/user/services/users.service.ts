import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class UsersService {
  URL = 'http://localhost:3000/users';
  constructor(private _HttpClient:HttpClient) { }

  //get Author By Id
  getUserById(id:number):Observable<any> {
      return this._HttpClient.get(`${this.URL}/${id}`);
  
    }
}
