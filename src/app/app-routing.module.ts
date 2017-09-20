import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const app_routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: 'sent', pathMatch: 'full', redirectTo: 'sent' },
	{ path: 'queued', pathMatch: 'full', redirectTo: 'queued' },
	{ path: 'type', pathMatch: 'full', redirectTo: 'type' },
	// { path: 'texts', loadChildren: 'app/texts/texts.module#TextsModule' },
	// { path: 'callcenter', loadChildren: 'app/callcenter/callcenter.module#CallCenterModule' },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' } //catch any unfound routes and redirect to home page
]

@NgModule({
	imports: [RouterModule.forRoot(app_routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }