var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
var ToolbarComponent = (function () {
    function ToolbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    Object.defineProperty(ToolbarComponent.prototype, "loginLogoutText", {
        get: function () {
            return (this.authService.isAuthenticated) ? 'Logout' : 'Login';
        },
        enumerable: true,
        configurable: true
    });
    ToolbarComponent.prototype.redirectToLogin = function () {
        console.log('go to login');
        this.router.navigate(['login']);
    };
    ToolbarComponent.prototype.loginLogout = function () {
        this.authService.isAuthenticated ? this.logout() : this.redirectToLogin();
        console.log('button pressed');
    };
    ToolbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.redirectToLogin();
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Component({
        selector: 'toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: ['./toolbar.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        AuthService])
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map