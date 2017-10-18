import { AuthService } from './auth.service';
import { ICustomer } from './../../texts/interfaces';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queries } from './queries'

@Injectable()
export class CustomersService {
  constructor(private httpClient: HttpClient, private aS: AuthService) { }
  customers: BehaviorSubject<ICustomer[]> = new BehaviorSubject<ICustomer[]>([])

  getCustomers() {
    const body = {
      query: Queries.queries.customers
    }

    return this.httpClient.post<any>(this.aS.endpointURL, body)
      .map(res => {
        console.log(res.data.customers)
        this.customers.next(res.data.customers)
      })
  }
}