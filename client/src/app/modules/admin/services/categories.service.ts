import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  URL = `${environment.domain}/category`;
  constructor(private _HttpClient:HttpClient) { }

  //Add category
  limit = 5
  currentPage = 1
  data:any 
  addCategory():Observable<any> {
    return this._HttpClient.post(this.URL, this.data);
  }
  //get category
  getCategories(skip:number, limit:number, options:any):Observable<any> {
    return this._HttpClient.get(`${this.URL}/?page=${skip}&limit=${limit}`,options);
  }

  //get Category By Id
  getCategoryById(id:any):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);
  }

  //update category
  updateCategory(id:any,data:any):Observable<any>{
    return this._HttpClient.patch(`${this.URL}/${id}`, data);
  }

  //delete category
  deleteCategory(id:any):Observable<any> {
    return this._HttpClient.delete(`${this.URL}/${id}`);
  }
  
}
