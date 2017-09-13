import { HomeComponent } from './home.component';
import { CanActivateGuard } from './can-activate.guard';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { QueuedMessagesComponent } from './text-messaging/queued-messages.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
	{ path: 'dashboard', component: HomeComponent, canActivate: [CanActivateGuard] },
	{ path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [CanActivateGuard]
})

export class HomeRoutingModule {
	static components = [
		QueuedMessagesComponent,
		HomeComponent
	]
}