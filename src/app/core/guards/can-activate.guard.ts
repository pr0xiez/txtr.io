import { NavigationService } from '../services/navigation.service';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CanActivateGuard implements CanActivate {
  isAuthenticated: boolean
  constructor(private aS: AuthService, private nS: NavigationService) {
    this.aS.isAuthenticated.subscribe(authValue => this.isAuthenticated = authValue)
  } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated === true) {
        return true
    }

    //Track URL user is trying to go to so we can send them there after logging in
    this.aS.redirectUrl = state.url
    this.nS.navigateToLoginPage()
    return false
  }
}