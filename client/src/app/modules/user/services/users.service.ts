import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'any'
})
export class UsersService {
  URL = `${environment.domain}/users`;
  constructor(private _HttpClient:HttpClient) { }

  //variables
  skip = 0

  private sharedData: any;
  private dataSubject = new Subject<any>();


  //get Author By Id
  getUserById(id:string, skip:number, limit:number ,options:any):Observable<any> {
      return this._HttpClient.get(`${this.URL}/oneUser?id=${id}&skip=${skip}&limit=${limit}`, options);
  
    }

    changeBookState(bookId:string,bookStatus:string, userId:string,options:any):Observable<any>{
      return this._HttpClient.patch(`${this.URL}/bookProgress?bookId=${bookId}&userId=${userId}&bookStatus=${bookStatus}`, options)
    }


  setData(data: any) {
    this.sharedData = data;
    this.dataSubject.next(this.sharedData);
  }
  
  getData() {
    return this.sharedData;
  }

  getDataSubject() {
    return this.dataSubject.asObservable();
  }

  changeBookRating(bookId:string, userId:string, rating : number, options:any){
    return this._HttpClient.patch(`${this.URL}/rating?bookId=${bookId}&id=${userId}&rating=${rating}`, options)
  }

  updateUserData(data:any, userId:any, options:any){
    return this._HttpClient.patch(`${this.URL}/profile/${userId}`,data, options)
  }

  updateUserImage(data:any, userId:any, options:any){
    return this._HttpClient.patch(`${this.URL}/image/${userId}`,data, options)
  }




}
