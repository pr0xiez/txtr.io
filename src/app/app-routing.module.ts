import { PageNotFoundComponent } from './page-not-found.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const app_routes: Routes = [
	// { path: 'texts', loadChildren: 'app/texts/texts.module#TextsModule' },
	// { path: 'callcenter', loadChildren: 'app/callcenter/callcenter.module#CallCenterModule' },
	{ path: '**', component: PageNotFoundComponent } //catch any unfound routes and redirect to home page
]

@NgModule({
	imports: [RouterModule.forRoot(app_routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }