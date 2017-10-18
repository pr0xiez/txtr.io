import { CardComponent } from './card/card.component';
import { CanActivateGuard } from '../core/guards/can-activate.guard';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'customers', component: CustomersComponent, canActivate: [ CanActivateGuard ] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class CustomersRoutingModule {
	static components = [
		CustomersComponent,
		CardComponent
	]
}