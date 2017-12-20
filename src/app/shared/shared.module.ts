import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule, MatToolbarModule, MatTableModule, MatListModule, MatSnackBarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

/**
 * @author ADH - 9.7.17 - <alex.hall@united-installs.com>
 * @description separate module that imports all of the modules you will need multiple times across the application
 */

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }