import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {
    
  }
  isAuthenticated: boolean

  login() {
    // TODO
  }

  logout() {
    // TODO
  }
}