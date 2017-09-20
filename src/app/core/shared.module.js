var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdInputModule, MdToolbarModule, MdTableModule, MdListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description separate NgModule that imports all of the Angular Material components that you will use in
 * your application. You can then include this module wherever you'd like to use the components.
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [],
        exports: [
            CommonModule,
            ReactiveFormsModule,
            MaterialModule,
            FlexLayoutModule,
            MdInputModule,
            MdToolbarModule,
            MdTableModule,
            MdListModule
        ],
        providers: [],
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map