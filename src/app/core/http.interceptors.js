var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SessionStorageService } from './services/session-storage.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
var HttpInterceptorService = (function () {
    function HttpInterceptorService(storage) {
        this.storage = storage;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        if (sessionStorage.getItem('token')) {
            this.token = this.storage.getDecryptedItem('token');
        }
        var _req = req.clone({ setHeaders: { authentication: this.token } });
        if (sessionStorage.getItem('token')) {
            console.log('intercepted request', _req);
            return next
                .handle(_req)
                .do(function (ev) {
                if (ev instanceof HttpResponse) {
                    console.log('intercepted response', ev);
                }
                return ev;
            })
                .catch(function (res) {
                if (res instanceof HttpErrorResponse) {
                    console.log('processing error response', res);
                }
                return Observable.throw(res);
            });
        }
        console.log('intercepted request', req);
        return next
            .handle(req)
            .do(function (ev) {
            if (ev instanceof HttpResponse) {
                console.log('intercepted response', ev);
            }
            return ev;
        })
            .catch(function (res) {
            if (res instanceof HttpErrorResponse) {
                console.log('processing error response', res);
            }
            return Observable.throw(res);
        });
    };
    return HttpInterceptorService;
}());
HttpInterceptorService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [SessionStorageService])
], HttpInterceptorService);
export { HttpInterceptorService };
//# sourceMappingURL=http.interceptors.js.map