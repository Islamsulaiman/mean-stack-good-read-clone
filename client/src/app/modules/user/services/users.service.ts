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
  getUserById(id:string, options:any):Observable<any> {
      return this._HttpClient.get(`${this.URL}/${id}`, options);
  
    }

    changeBookState(bookId:string,bookStatus:string, userId:string,options:any):Observable<any>{
      return this._HttpClient.patch(`${this.URL}/bookProgress?bookId=${bookId}&userId=${userId}&bookStatus=${bookStatus}`, options)
    }

    // changeBookState(bookId:string,bookStatus:string ,options:any):Observable<any>{
    //   return this._HttpClient.patch(`${this.URL}/bookProgress?bookId=${bookId}&userId=${userId}&bookStatus=${bookStatus}`, options)
    // }
}
