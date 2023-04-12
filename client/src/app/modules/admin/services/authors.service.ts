import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {


  URL = 'http://localhost:3000/category';
  constructor(private _HttpClient:HttpClient) { }

  //Add Author
  addAuthor(data:any):Observable<any>  {
    return this._HttpClient.post(this.URL, data);
  }

  //get Authors
  getAuthors():Observable<any> {
    return this._HttpClient.get(this.URL);
  }

  //get Author By Id
  getAuthorById(id:number):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);
  }

  //update Author
  updateAuthor(id:number,data:any):Observable<any>{
    return this._HttpClient.put(`${this.URL}/${id}`, data);
  }

  //delete Author
  deleteAuthor(id:number):Observable<any> {
    return this._HttpClient.delete(`${this.URL}/${id}`);
  }
}
