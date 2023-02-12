import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { PaymentService } from '../payment.service';
import { FormBuilder } from '@angular/forms';
import { Customer } from '../customer';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {
  paymentHandler: any = null;
  customers = this.payment.getCustomers();

  checkoutForm = this.formBuilder.group({
    email: '',
    firstname: '',
    lastname: '',
    address: ''
  })

  constructor(
    private payment: PaymentService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit():void {
    //process checkout data, where emails would go out with confirmations
    let curFirstname = this.checkoutForm.value.firstname;
    if (curFirstname == null || curFirstname == undefined){
      curFirstname = '';
    }
    let curLastname = this.checkoutForm.value.lastname;
    if (curLastname == null || curLastname == undefined){
      curLastname = '';
    }
    let curEmail= this.checkoutForm.value.email;
    if (curEmail == null || curEmail == undefined){
      curEmail = '';
    }
    let curAddress= this.checkoutForm.value.address;
    if (curAddress == null || curAddress == undefined){
      curAddress = '';
    }
    let currentCust = new Customer(curEmail, curFirstname, curLastname, curAddress)
    this.payment.addCustomer(currentCust);
    //notify here
    //payment here
    
    this.customers = this.payment.clearCustomers();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'sk_test_51MaOunGpKgUN2R421V5yS540kBw0xPoRWaUFcizlFh96klByvHcmJEpVD79WPgh7v3QbpGyhhMaQTcreNCmsqxb300oq8jHnwI',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'sk_test_51MaOunGpKgUN2R421V5yS540kBw0xPoRWaUFcizlFh96klByvHcmJEpVD79WPgh7v3QbpGyhhMaQTcreNCmsqxb300oq8jHnwI',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
