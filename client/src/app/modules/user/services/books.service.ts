import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'any'
})
export class BooksService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBooks(skip:number, limit:number, options:any): Observable<any>{
    return this._HttpClient.get(`${environment.domain}/book?skip=${skip}&limit=${limit}`, options)
  }

  getSingleBook(bookId:string, options:any): Observable<any>{
    return this._HttpClient.get(`${environment.domain}/book/${bookId}`, options)
  }

  getBookReviews(bookId:string, skip:number, limit:number, options:any): Observable<any>{
    return this._HttpClient.get(`${environment.domain}/book/${bookId}/review?skip=${skip}&limit=${limit}`, options)
  }


  getPopularBooks(options:any): Observable<any>{
    return this._HttpClient.get(`${environment.domain}/book/all/popular`, options)
  }



// Function to retrieve data from the database [Search]

searchForBooks(searchQuery: string): Observable<any> {
  return this._HttpClient.post<{payload: Array<object>}>(`${environment.domain}/book/search`, {payload: searchQuery},{
    headers: new HttpHeaders({"Content-Type": 'application/json'})
  }).pipe(
    map(data=> data.payload)
  )

}

}
  
