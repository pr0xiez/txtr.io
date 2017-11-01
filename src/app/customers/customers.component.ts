import { CustomersService } from '../core/services/customers.service';
import { ICustomer } from './../texts/interfaces';
import { Component } from '@angular/core'

@Component({
  template: `
  <div fxLayout="row" fxLayoutWrap fxLayoutGap="10px">
    <customer-card 
      *ngFor="let x of customers | async; trackBy: trackById"
      [customer]="x">
    </customer-card>
  </div>
  `,
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent {
  constructor(private cS: CustomersService) {
    console.log('customers component constructor ran')
    this.customers = this.cS.customers.asObservable()
  }
  customers

  trackById(index: any, item: any): number {
    return item.id
  }
}