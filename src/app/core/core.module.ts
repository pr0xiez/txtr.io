import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { HttpInterceptorService } from "./http.interceptors";

@NgModule({
  imports: [HttpClientModule, SharedModule, CommonModule],
  exports: [HttpClientModule],
  providers: [ 
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ]
})

export class CoreModule {}