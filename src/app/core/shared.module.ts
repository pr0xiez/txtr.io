import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule, MdInputModule, MdToolbarModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description separate NgModule that imports all of the Angular Material components that you will use in 
 * your application. You can then include this module wherever you'd like to use the components.
 */

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MdInputModule,
    MdToolbarModule
  ],
  providers: [],
})
export class SharedModule { }