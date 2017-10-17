import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'customers', component: CustomersComponent }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class CustomersRoutingModule {
	static components = [
    CustomersComponent
	]
}