import { Injectable } from '@angular/core';
declare var require: any
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('pSG.zIixSC9cRYeLoyPz4wiGIw.U6DARZDNP0YlzMRshSfBoRYjYsbxHEulCsSuRxGSmSM');

// function sendgridSendEmail(data: any): Promise<void> {
//   console.log(`Sending email with data: `, data);
//   // const sgMail = require('@sendgrid/mail');
//   sgMail.setApiKey('pSG.zIixSC9cRYeLoyPz4wiGIw.U6DARZDNP0YlzMRshSfBoRYjYsbxHEulCsSuRxGSmSM');
//   return sgMail
//     .send(data)
//     .then((response: any[]) => console.log('Success sending email: ', response))
//     .catch((error: any) => console.log('Error sending email: ', error));
// }

@Injectable({
  providedIn: 'root'
})

 
export class EmailService {

  msgRentConfirm = {
    to: 'test@example.com',
    from: 'lidavaj605@iucake.com',
    subject: 'Renter has confirmed',
    text: 'Your renter has confirmed and paid for their stay! ',
    html: '',
  };

  msgRentalConfirm = {
    to: 'test@example.com',
    from: 'lidavaj605@iucake.com',
    subject: 'Rental Confirmed',
    text: 'Your renter has confirmed and paid for their stay!',
    html: '',
  };

  msgRentalApproved = {
    to: 'test@example.com',
    from: 'lidavaj605@iucake.com',
    subject: 'Rental Approved',
    text: 'Congratulations your rental has been approved! Please click the link below to confirm and pay!',
    html: '',
  };

  msgRegistered = {
    to: 'test@example.com',
    from: 'lidavaj605@iucake.com',
    subject: 'Rental Approved',
    text: 'Congratulations your rental has been approved! Please click the link below to confirm and pay!',
    html: '',
  };



  sendRegistered(address: string) {
    this.msgRegistered.to = address;
    // sendgridSendEmail(this.msgRegistered);
  }

  sendRentConfirm(address: string) {
    this.msgRentConfirm.to = address;
    // sendgridSendEmail(this.msgRentConfirm);
  }

  sendRentalConfirm(address: string) {
    this.msgRentalConfirm.to = address;
    // sendgridSendEmail(this.msgRentalConfirm);
  }

  sendRentalApproved(address: string) {
    this.msgRentalApproved.to = address;
    // sendgridSendEmail(this.msgRentalApproved);
  }




  constructor() { }
}
