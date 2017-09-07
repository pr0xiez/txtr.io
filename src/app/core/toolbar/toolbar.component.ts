import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Subscription } from 'rxjs/Subscription'

import { AuthService, LoginLogoutText } from '../../core/services/auth.service';

@Component({
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
	constructor(private router: Router,
							private authService: AuthService,) {}
  loginLogoutTextSub: Subscription
  loginLogoutText: LoginLogoutText

	ngOnInit() {
    this.loginLogoutTextSub = this.authService.loginLogoutText$.subscribe(data => {
      this.loginLogoutText = data
    })
	}

	redirectToLogin() {
		this.router.navigate(['/login'])
	}

	logout() {
    this.authService.logout()
    this.redirectToLogin()
	}
}