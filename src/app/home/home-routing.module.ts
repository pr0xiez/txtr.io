import { CanActivateGuard } from './can-activate.guard';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent, canActivate: [CanActivateGuard] },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [CanActivateGuard]
})

export class HomeRoutingModule {
	static components = [HomeComponent]
}