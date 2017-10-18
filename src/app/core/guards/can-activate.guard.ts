import { NavigationService } from '../services/navigation.service';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private aS: AuthService, private nS: NavigationService) { } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.aS.isAuthenticated) {
        return true
    }

    //Track URL user is trying to go to so we can send them there after logging in
    this.aS.redirectUrl = state.url
    this.nS.navigateToLoginPage()
    return false
  }
}