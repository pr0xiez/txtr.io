var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { QueuedDataSource } from './queued.data';
import { AuthService } from '../../core/services/auth.service';
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description Displays queued text messages
 */
var QueuedComponent = (function () {
    function QueuedComponent(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.displayedColumns = ['id', 'messageId', 'to', 'templateVars', 'sendAt'];
        this.messages = new QueuedDataSource(this.httpClient, this.authService);
    }
    return QueuedComponent;
}());
QueuedComponent = __decorate([
    Component({
        templateUrl: 'queued.component.html',
        styleUrls: ['queued.component.scss']
    }),
    __metadata("design:paramtypes", [HttpClient, AuthService])
], QueuedComponent);
export { QueuedComponent };
//# sourceMappingURL=queued.component.js.map