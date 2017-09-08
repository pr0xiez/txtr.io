import { HttpResponse } from '@angular/common/http/src/response';
import { IUserLogin } from './interfaces';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject'
import { Queries } from './queries'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */

export type LoginLogoutText = 'Login' | 'Logout'
export type UserType = 'admin' | 'default' | 'disabled'
@Injectable()
export class AuthService implements OnInit {
  constructor(private httpClient: HttpClient) {}
  endpointURL: string = 'https://ui-txtr.mybluemix.net/graphql'
  isAuthenticated: boolean = false
  userType: UserType

  ngOnInit() {
    this.isAuthenticated = sessionStorage.getItem('token') ? true : false
  }

  login(userLogin: IUserLogin) {
    const body = {
			query: Queries.queries.login,
			variables: { email: userLogin.email, password: userLogin.password }
    }
    return this.httpClient.post<HttpResponse<any>>(this.endpointURL, body)
      .map(res => {
        console.log(res)
      })
  }

  logout() {
    // TODO
  }
}