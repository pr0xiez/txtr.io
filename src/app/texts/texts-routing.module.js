var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TypeComponent } from './type/type.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';
import { QueuedComponent } from './queued/queued.component';
import { CanActivateGuard } from './can-activate.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'queued', component: QueuedComponent, canActivate: [CanActivateGuard] },
    { path: 'sent', component: SentComponent, canActivate: [CanActivateGuard] },
    { path: 'received', component: ReceivedComponent, canActivate: [CanActivateGuard] },
    { path: 'type', component: TypeComponent, canActivate: [CanActivateGuard] }
];
var TextsRoutingModule = (function () {
    function TextsRoutingModule() {
    }
    return TextsRoutingModule;
}());
TextsRoutingModule.components = [
    QueuedComponent,
    SentComponent,
    ReceivedComponent,
    TypeComponent
];
TextsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
        providers: [CanActivateGuard]
    })
], TextsRoutingModule);
export { TextsRoutingModule };
//# sourceMappingURL=texts-routing.module.js.map