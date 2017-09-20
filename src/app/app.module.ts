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
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    ToolbarModule,
    TextsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }