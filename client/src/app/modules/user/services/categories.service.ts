import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CategoriesService {


  URL = 'http://localhost:3000/category';
  constructor(private _HttpClient:HttpClient) { }

  //get Authors
  limit = 8
  currentPage = 1
  getCategories():Observable<any> {
    return this._HttpClient.get(`${this.URL}/?page=${this.currentPage}&limit=${this.limit}`);
  }

  //get Author By Id
  getCategoryById(id:number):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);

  }
}