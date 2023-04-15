import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class BooksService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBooks(skip:number, limit:number, options:any): Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/book?skip=${skip}&limit=${limit}`, options)
  }

  getSingleBook(bookId:string, options:any): Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/book/${bookId}`, options)
  }

  getBookReviews(bookId:string, skip:number, limit:number, options:any): Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/book/${bookId}/review?skip=${skip}&limit=${limit}/review`, options)
  }

  addBookReviews(bookId:string , data:any):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/book/${bookId}/review`,data);
  }

// Function to retrieve data from the database [Search]

searchForBooks(searchQuery: string): Observable<any> {
  return this._HttpClient.post<{payload: Array<object>}>(`http://localhost:3000/book/search`, {payload: searchQuery},{
    headers: new HttpHeaders({"Content-Type": 'application/json'})
  }).pipe(
    map(data=> data.payload)
  )

}

}

