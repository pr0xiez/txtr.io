import { TypeComponent } from './type/type.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';
import { QueuedComponent } from './queued/queued.component'
import { CanActivateGuard } from '../core/guards/can-activate.guard'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'texts/queued'},
	{ path:'texts/queued',  component: QueuedComponent, canActivate: [CanActivateGuard] },
	{ path:'texts/sent',  component: SentComponent, canActivate: [CanActivateGuard] },
	{ path:'texts/received',  component: ReceivedComponent, canActivate: [CanActivateGuard] },
	{ path:'texts/type',  component: TypeComponent, canActivate: [CanActivateGuard] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class TextsRoutingModule {
	static components = [
		QueuedComponent,
		SentComponent,
		ReceivedComponent,
		TypeComponent
	]
}