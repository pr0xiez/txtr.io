import { TypeComponent } from './type/type.component'
import { CanActivateGuard } from '../core/guards/can-activate.guard'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'texts/type'},
	{ path:'texts/type',  component: TypeComponent, canActivate: [CanActivateGuard] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class TextsRoutingModule {
	static components = [
		TypeComponent
	]
}