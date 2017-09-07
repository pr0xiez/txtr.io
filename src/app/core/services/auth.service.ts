import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */

export type LoginLogoutText = 'Login' | 'Logout'
export type UserType = 'admin' | 'default' | 'disabled'
@Injectable()
export class AuthService implements OnInit {
  constructor(private httpClient: HttpClient) {}
  isAuthenticated$: Subject<boolean>
  loginLogoutText$: Subject<LoginLogoutText>
  userType$: Subject<UserType> = new Subject()

  ngOnInit() {}

  private changeIsAuthenticated(x: boolean): void {
    this.isAuthenticated$.next(x)
    x === true ? this.loginLogoutText$.next('Logout') : this.loginLogoutText$.next('Login')
  }

  private changeUserType(x: UserType): void {
    this.userType$.next(x)
  }

  login() {
    // TODO
  }

  logout() {
    // TODO
  }
}