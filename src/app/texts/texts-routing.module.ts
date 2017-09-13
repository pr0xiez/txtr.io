import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';
import { QueuedMessagesComponent } from './queued/queued.component'
import { CanActivateGuard } from './can-activate.guard'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'queued'}, // queued Msgs is default page
  { path:'queued',  component: QueuedMessagesComponent },
	{ path: '**', pathMatch: 'full', redirectTo: ''}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [CanActivateGuard]
})

export class TextsRoutingModule {
	static components = [
		QueuedMessagesComponent,
		SentComponent,
		ReceivedComponent
	]
}