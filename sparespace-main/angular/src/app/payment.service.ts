import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})


export class PaymentService {
  customers: Customer[] = [];
  constructor() { }

  addCustomer(cust: Customer){
    this.customers.push(cust);
  }

  getCustomers(){
    return this.customers;
  }

  clearCustomers(){
    this.customers = [];
    return this.customers;
  }
}
