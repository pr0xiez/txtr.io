import { TypeComponent } from './type/type.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';
import { QueuedComponent } from './queued/queued.component'
import { CanActivateGuard } from './can-activate.guard'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'queued'},
	{ path:'queued',  component: QueuedComponent, canActivate: [CanActivateGuard] },
	{ path:'sent',  component: SentComponent, canActivate: [CanActivateGuard] },
	{ path:'received',  component: ReceivedComponent, canActivate: [CanActivateGuard] },
	{ path:'type',  component: TypeComponent, canActivate: [CanActivateGuard] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [CanActivateGuard]
})

export class TextsRoutingModule {
	static components = [
		QueuedComponent,
		SentComponent,
		ReceivedComponent,
		TypeComponent
	]
}