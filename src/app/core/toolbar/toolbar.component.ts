import { NaviagationService } from './../services/navigation.service';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'

import { Subscription } from 'rxjs/Subscription'

import { AuthService, LoginLogoutText } from '../../core/services/auth.service';

@Component({
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
	constructor(private router: Router,
							private authService: AuthService,
							private navigationService: NaviagationService) {}

	get loginLogoutText(): string {
		return (this.authService.isAuthenticated) ? 'Logout' : 'Login'
	}

	redirectToLogin() {
		console.log('go to login')
		this.router.navigate(['login'])
	}

	loginLogout() {
		this.authService.isAuthenticated ? this.logout() : this.redirectToLogin()
		console.log('button pressed')
	}

	logout() {
    this.authService.logout()
    this.redirectToLogin()
	}
}