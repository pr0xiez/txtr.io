import { TextsRoutingModule } from './texts-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared.module';

@NgModule({
  imports: [ TextsRoutingModule, SharedModule ],
  declarations: TextsRoutingModule.components
})
export class TextsModule { }
