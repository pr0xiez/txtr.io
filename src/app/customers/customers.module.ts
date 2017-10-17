import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core'

import { CustomersRoutingModule } from './customers.routing'

@NgModule({
  imports: [ SharedModule, CustomersRoutingModule ],
  declarations: [ CustomersRoutingModule.components ]
})
export class CustomersModule { }