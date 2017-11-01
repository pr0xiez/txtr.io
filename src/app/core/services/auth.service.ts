import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { NavigationService } from './navigation.service'
import { IHttpResponse, IUserLogin } from './interfaces'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Queries } from './queries'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'

export type LoginLogoutText = 'Login' | 'Logout'
export type UserType = 'admin' | 'default' | 'disabled'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router, private nS: NavigationService) {
    localStorage.getItem('token') ? this.isAuthenticated.next(true) : this.isAuthenticated.next(false)
  }
  endpointURL: string = 'https://txtr.mybluemix.net/graphql'
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false)
  userType: UserType
  redirectUrl: string

  login(userLogin: IUserLogin) {
    const body = {
			query: Queries.queries.login,
			variables: { email: userLogin.email, password: userLogin.password }
    }

    return this.httpClient.post<IHttpResponse<any>>(this.endpointURL, body)
      .map(res => {
        if (res.data.credentials.token) {
          this.isAuthenticated.next(true)
          localStorage.setItem('token', res.data.credentials.token)
        }
        (this.redirectUrl != null) ? this.router.navigate([this.redirectUrl]) : this.nS.naivgateToCustomersPage()
        return res
      })
      .catch(e => Observable.throw(e))
  }

  logout() {
    this.isAuthenticated.next(false)
    localStorage.clear()
    sessionStorage.clear()
  }
}