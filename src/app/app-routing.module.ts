import { PageNotFoundComponent } from './page-not-found.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'

const app_routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'texts'},
	{ path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
	{ path: '**', component: PageNotFoundComponent } //catch any unfound routes and redirect to home page
]

@NgModule({
	imports: [RouterModule.forRoot(app_routes, 
		{
			enableTracing: true, // <-- debugging purposes only
			preloadingStrategy: PreloadAllModules
		}
	)],
	exports: [RouterModule]
})
export class AppRoutingModule { }