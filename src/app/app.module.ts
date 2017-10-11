import { PageNotFoundComponent } from './page-not-found.component';
import { ComponentsModule } from './components/components.module';
import { TextsModule } from './texts/texts.module';
import { CoreModule } from './core/core.module'
import { LoginModule } from './core/login/login.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SharedModule } from "./core/shared.module";
import { ToolbarModule } from "./core/toolbar/toolbar.module";

import 'hammerjs'
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    LoginModule,
    TextsModule,      // contains routing module - order of the routing modules DOES MATTER!!!
    AppRoutingModule, // contains routing module - order of the routing modules DOES MATTER!!!
    ComponentsModule,
    SharedModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }