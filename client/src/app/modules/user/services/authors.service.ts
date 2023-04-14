import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AuthorsService {


  URL = 'http://localhost:3000/authors';
  constructor(private _HttpClient:HttpClient) { }

  //get Authors
  limit = 8
  currentPage = 1
  getAuthors():Observable<any> {
    return this._HttpClient.get(`${this.URL}/?page=${this.currentPage}&limit=${this.limit}`);
  }

  //get Author By Id
  getAuthorById(id:number):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);

  }
}