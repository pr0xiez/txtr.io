import { SharedModule } from '../shared.module';
import { NgModule } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { LoginRoutingModule } from './login-routing.module'

@NgModule({
  imports: [ SharedModule, LoginRoutingModule ],
  declarations: LoginRoutingModule.components,
  providers: [/* TODO: Providers go here */]
})
export class LoginModule { }