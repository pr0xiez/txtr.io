import { Component } from '@angular/core'

@Component({
  template: `
  <div fxLayout="row" fxLayoutWrap fxLayoutGap="10px">
    <mat-card>
      <mat-card-header>
        <mat-card-title>Name</mat-card-title>
        <mat-card-subtitle>Email (if exists)</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          id<br>
          phoneNumber<br>
          timezone
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>SENT</button>
        <button mat-button>QUEUED</button>
      </mat-card-actions>
    </mat-card>

    <mat-card>
      <mat-card-header>
        <mat-card-title>Name</mat-card-title>
        <mat-card-subtitle>Email (if exists)</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          id<br>
          phoneNumber<br>
          timezone
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>SENT</button>
        <button mat-button>QUEUED</button>
      </mat-card-actions>
    </mat-card>
    
    <mat-card>
      <mat-card-header>
        <mat-card-title>Name</mat-card-title>
        <mat-card-subtitle>Email (if exists)</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          id<br>
          phoneNumber<br>
          timezone
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>SENT</button>
        <button mat-button>QUEUED</button>
      </mat-card-actions>
    </mat-card>
  </div>
  `,
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent {}