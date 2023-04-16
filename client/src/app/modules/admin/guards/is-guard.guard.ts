import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class IsGuardGuard implements CanActivate {
  constructor(private _router:Router, private _authservice: AuthService){
    this._authservice.savecurrentAdmin()
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._authservice.currentAdmin.getValue() ? true : this._router.navigate(['/admin/login']);
    
    }
}
