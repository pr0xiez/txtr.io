import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */


type UserType = 'admin' | 'default' | 'disabled'
@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  isAuthenticated$: Subject<boolean> = new Subject()
  userType$: Subject<UserType> = new Subject()

  private changeIsAuthenticated(x: boolean): void {
    this.isAuthenticated$.next(x)
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