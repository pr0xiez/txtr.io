import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';

@NgModule({
  imports: [ HomeRoutingModule, SharedModule ],
  declarations: HomeRoutingModule.components
})
export class HomeModule { }
