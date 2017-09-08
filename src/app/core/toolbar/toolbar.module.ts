import { CoreModule } from '../core.module';
import { SharedModule } from '../shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [ SharedModule ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: [/* TODO: Providers go here */],
  bootstrap: [ToolbarComponent],
})
export class ToolbarModule { }
