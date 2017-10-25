import { AuthService } from './auth.service';
import { ICustomer } from './../../texts/interfaces';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queries } from './queries'

@Injectable()
export class CustomersService {
  constructor(private httpClient: HttpClient, private aS: AuthService) {
    if (sessionStorage.getItem('customers') == undefined) {
      this.getCustomers().subscribe()
    } else {
      this.customers.next(this.getCustomersFromCache())
    }
  }
  getCustomersFromCache() { return JSON.parse(sessionStorage.getItem('customers')).data.customers.slice(0,16)}
  customers: BehaviorSubject<ICustomer[]> = new BehaviorSubject<ICustomer[]>([])

  getCustomers() {
    const body = {
      query: Queries.queries.customers
    }

    return this.httpClient.post<any>(this.aS.endpointURL, body)
      .map(res => {
        sessionStorage.setItem('customers', JSON.stringify(res))
        this.customers.next(res.data.customers.slice(0,16))
      })
  }
}