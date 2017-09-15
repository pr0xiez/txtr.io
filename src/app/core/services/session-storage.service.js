var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import * as crypt from 'crypto-js';
var SessionStorageService = (function () {
    function SessionStorageService() {
        this.secretKey = 'doubleIPAbestBeerNALOLLL111';
    }
    SessionStorageService.prototype.clearStorage = function () { sessionStorage.clear(); };
    SessionStorageService.prototype.setItem = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    SessionStorageService.prototype.getItem = function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    SessionStorageService.prototype.setEncryptedItem = function (key, data) {
        sessionStorage.setItem(key, crypt.AES.encrypt(JSON.stringify(data), this.secretKey));
    };
    SessionStorageService.prototype.getDecryptedItem = function (key) {
        var bytes = crypt.AES.decrypt(sessionStorage.getItem(key).toString(), this.secretKey);
        var decryptedData = JSON.parse(bytes.toString(crypt.enc.Utf8));
        console.log(decryptedData);
        return decryptedData;
    };
    return SessionStorageService;
}());
SessionStorageService = __decorate([
    Injectable()
], SessionStorageService);
export { SessionStorageService };
//# sourceMappingURL=session-storage.service.js.map