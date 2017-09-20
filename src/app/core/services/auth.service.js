var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queries } from './queries';
import { Router } from '@angular/router';
/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description AuthService class authorization/userType state for current user
 */
var AuthService = (function () {
    function AuthService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.endpointURL = 'https://ui-txtr.mybluemix.net/graphql';
        this.isAuthenticated = sessionStorage.getItem('token') ? true : false;
    }
    AuthService.prototype.login = function (userLogin) {
        var _this = this;
        var body = {
            query: Queries.queries.login,
            variables: { email: userLogin.email, password: userLogin.password }
        };
        console.log(body);
        return this.httpClient.post(this.endpointURL, body)
            .map(function (res) {
            if (res.data.credentials.token) {
                console.log('token', res.data.credentials.token);
                _this.isAuthenticated = true;
                sessionStorage.setItem('token', res.data.credentials.token);
            }
            (_this.redirectUrl != null) ? _this.router.navigate([_this.redirectUrl]) : _this.router.navigate(['sent']);
        });
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticated = false;
        sessionStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map