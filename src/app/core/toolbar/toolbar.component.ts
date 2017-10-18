import { NavigationService } from './../services/navigation.service';
import { Component } from '@angular/core'
import { AuthService, LoginLogoutText } from '../../core/services/auth.service'

@Component({
	selector: 'toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
	constructor(private authService: AuthService,
							public nS: NavigationService) {}

	get loginLogoutText(): LoginLogoutText {
		return (this.authService.isAuthenticated) ? 'Logout' : 'Login'
	}

	loginLogout() {
		this.authService.isAuthenticated ? this.logout() : this.nS.navigateToLoginPage()
	}

	logout() {
    this.authService.logout()
    this.nS.navigateToLoginPage()
	}
}