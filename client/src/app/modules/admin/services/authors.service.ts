import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  id : any ;
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
  getAuthorById():Observable<any> {
    return this._HttpClient.get(`${this.URL}/${this.id}`);
  }

  //update Author
  updateAuthor(data:any):Observable<any>{
    return this._HttpClient.put(`${this.URL}/${this.id}`, data);
  }

  //delete Author
  deleteAuthor():Observable<any> {
    return this._HttpClient.delete(`${this.URL}/${this.id}`);
  }
}
