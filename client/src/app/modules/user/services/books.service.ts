import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class BooksService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBooks(skip:number, limit:number, options:any): Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/book?skip=${skip}&limit=${limit}`, options)
  }



}
