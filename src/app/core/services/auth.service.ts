import { NavigationService } from './navigation.service';
import { HttpResponse } from '@angular/common/http/src/response';
import { IHttpResponse, IUserLogin } from './interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject'
import { Queries } from './queries'
import { Router } from '@angular/router';

export type LoginLogoutText = 'Login' | 'Logout'
export type UserType = 'admin' | 'default' | 'disabled'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router, private nS: NavigationService) {
    this.isAuthenticated = localStorage.getItem('token') ? true : false
  }
  endpointURL: string = 'https://txtr.mybluemix.net/graphql'
  isAuthenticated: boolean
  userType: UserType
  redirectUrl: string

  login(userLogin: IUserLogin) {
    const body = {
			query: Queries.queries.login,
			variables: { email: userLogin.email, password: userLogin.password }
    }
    console.log(body)
    return this.httpClient.post<any>(this.endpointURL, body)
      .map(res => {
        if (res.data.credentials.token) {
          console.log('token', res.data.credentials.token)
          this.isAuthenticated = true
          localStorage.setItem('token', res.data.credentials.token)
        }
        (this.redirectUrl != null) ? this.router.navigate([this.redirectUrl]) : this.nS.navigateToQueuedTextsPage()
      })
  }

  logout() {
    this.isAuthenticated = false
    localStorage.clear()
  }
}