import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class UsersService {
  URL = 'http://localhost:3000/users';
  constructor(private _HttpClient:HttpClient) { }

  //variables
  // SharedBookState=""

  private sharedData: any;
  private dataSubject = new Subject<any>();


  //get Author By Id
  getUserById(id:string, options:any):Observable<any> {
      return this._HttpClient.get(`${this.URL}/${id}`, options);
  
    }

    changeBookState(bookId:string,bookStatus:string, userId:string,options:any):Observable<any>{
      return this._HttpClient.patch(`${this.URL}/bookProgress?bookId=${bookId}&userId=${userId}&bookStatus=${bookStatus}`, options)
    }

    // setBookState(data: string){
    //   this.SharedBookState = data;
    //   console.log("user service",this.SharedBookState)
    // }

    // getBookState(){
    //   return this.SharedBookState;
    // }


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





}
