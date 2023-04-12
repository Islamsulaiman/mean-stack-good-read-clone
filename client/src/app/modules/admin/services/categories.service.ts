import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  URL = 'http://localhost:3000/category';
  constructor(private _HttpClient:HttpClient) { }

  //Add category
  addCategory(data:any):Observable<any>  {
    return this._HttpClient.post(this.URL, data);
  }

  //get category
  getCategories():Observable<any> {
    return this._HttpClient.get(this.URL);
  }

  //get Category By Id
  getCategoryById(id:number):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);
  }

  //update category
  updateCategory(id:number,data:any):Observable<any>{
    return this._HttpClient.put(`${this.URL}/${id}`, data);
  }

  //delete category
  deleteCategory(id:number):Observable<any> {
    return this._HttpClient.delete(`${this.URL}/${id}`);
  }
}
