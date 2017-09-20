var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from '../core/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var CanActivateGuard = (function () {
    function CanActivateGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        //Track URL user is trying to go to so we can send them there after logging in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['login']);
        return false;
    };
    return CanActivateGuard;
}());
CanActivateGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService, Router])
], CanActivateGuard);
export { CanActivateGuard };
//# sourceMappingURL=can-activate.guard.js.map