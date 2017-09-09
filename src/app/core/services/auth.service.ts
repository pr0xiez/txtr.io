import { SessionStorageService } from './session-storage.service';
import { HttpResponse } from '@angular/common/http/src/response';
import { IHttpResponse, IUserLogin } from './interfaces';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject'
import { Queries } from './queries'
import { Router } from '@angular/router';

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */

export type LoginLogoutText = 'Login' | 'Logout'
export type UserType = 'admin' | 'default' | 'disabled'
@Injectable()
export class AuthService implements OnInit {
  constructor(private httpClient: HttpClient, private storage: SessionStorageService, private router: Router) {}
  endpointURL: string = 'https://ui-txtr.mybluemix.net/graphql'
  isAuthenticated: boolean = false
  userType: UserType
  redirectUrl: string

  ngOnInit() {
    this.isAuthenticated = sessionStorage.getItem('token') ? true : false
  }

  login(userLogin: IUserLogin) {
    const body = {
			query: Queries.queries.login,
			variables: { email: userLogin.email, password: userLogin.password }
    }
    return this.httpClient.post<IHttpResponse>(this.endpointURL, body)
      .map(res => {
        if (res.data.credentials.token) {
          console.log('token', res.data.credentials.token)
          this.isAuthenticated = true
          this.storage.setEncryptedItem('token', res.data.credentials.token)
          console.log(this.storage.getDecryptedItem('token'))
        }
        (this.redirectUrl != null) ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['home'])
      })
  }

  logout() {
    this.isAuthenticated = false
    this.storage.clearStorage()
  }
}