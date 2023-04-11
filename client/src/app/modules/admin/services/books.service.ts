import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  URL = 'http://localhost:3000/books';
  constructor(private _HttpClient:HttpClient) { }

  //Add Book
  addBook(data:any):Observable<any> {
    return this._HttpClient.post(this.URL,data);
  }

  //Get All Books
  getBooks():Observable<any> {
    return this._HttpClient.get(this.URL);
  }

  //Get Book by ID
  getBookByID(id:string):Observable<any> {
    return this._HttpClient.get(`${this.URL}/${id}`);
  }

  //Update Book
  updateBook(id:string , data:any):Observable<any>{
    return this._HttpClient.put(`${this.URL}/${id}`,data);
  }

  //Delete Book
  deleteBook(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.URL}/${id}`);
  }

}
