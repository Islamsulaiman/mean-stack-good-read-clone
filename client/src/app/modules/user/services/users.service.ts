import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class UsersService {
  URL = 'http://localhost:3000/users';
  constructor(private _HttpClient:HttpClient) { }

}
