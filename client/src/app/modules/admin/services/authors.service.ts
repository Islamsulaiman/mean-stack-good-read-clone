import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  currentPage = 1
  
  URL = `${environment.domain}/authors`;
  constructor(private _HttpClient:HttpClient) { }

  //Add Author
  addAuthor(data:any):Observable<any>  {
    return this._HttpClient.post(this.URL, data);
  }

  //get Authors
  getAuthors(page:number, limit:number, options:any):Observable<any> {
    return this._HttpClient.get(`${this.URL}/?page=${page}&limit=${limit}`,options);
  }
  //get Author By Id
  getAuthorById(id:any):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);
  }

  //update Author
  updateAuthor(id:any, data:any):Observable<any>{
    return this._HttpClient.patch(`${this.URL}/${id}`, data);
  }

  //delete Author
  deleteAuthor(id:any):Observable<any> {
    return this._HttpClient.delete(`${this.URL}/${id}`);
  }
}
