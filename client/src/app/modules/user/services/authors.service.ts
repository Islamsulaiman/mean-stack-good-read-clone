import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'any'
})
export class AuthorsService {


  URL = `${environment.domain}/authors`;
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