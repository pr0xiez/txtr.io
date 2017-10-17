import { CanActivateGuard } from './guards/can-activate.guard';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { AuthService } from "./services/auth.service"
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HttpInterceptorService } from "./http.interceptors"
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description separate module that imports all of the modules you will ONLY LOAD ONCE!
 * ****-------- THIS MODULE SHOULD ONLY BE LOADED ONCE IN THE APP.MODULE! --------****
 */

@NgModule({
  imports: [HttpClientModule, SharedModule, CommonModule],
  exports: [HttpClientModule],
  providers: [ 
    AuthService,
    CanActivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) { //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    super(parentModule)
  }  
}