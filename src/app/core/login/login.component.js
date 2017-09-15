var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { AuthService } from "../services/auth.service";
var LoginComponent = (function () {
    function LoginComponent(snackBar, formBuilder, authService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    // openForgotPasswordDialog() {
    //     this.dialog.open(ForgotPasswordComponent, {
    //         height: '250px',
    //         width: '600px'
    //     })
    // }
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    };
    LoginComponent.prototype.openSnackBar = function (message, extraClasses, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
            extraClasses: extraClasses
        });
    };
    LoginComponent.prototype.submit = function (loginForm) {
        var _this = this;
        var userCredentials = {
            email: loginForm.controls.email.value,
            password: loginForm.controls.password.value
        };
        this.authService.login(userCredentials)
            .subscribe(function (res) { return _this.onNext(res); }, this.onError(), this.onComplete());
    };
    LoginComponent.prototype.onNext = function (x) {
        console.log(x);
    };
    LoginComponent.prototype.onError = function () {
        var _this = this;
        return function () {
            _this.openSnackBar('Failed to Login', ['errorSnackBar']);
        };
    };
    LoginComponent.prototype.onComplete = function () {
        var _this = this;
        return function () {
            _this.openSnackBar('Successfully Logged In!', ['successSnackBar']);
            //this.router.navigate(['callcenter/dashboard'])
        };
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.scss']
    }),
    __metadata("design:paramtypes", [MdSnackBar,
        FormBuilder,
        AuthService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map