import { Injectable } from '@angular/core';
import { Client as Appwrite, Account } from 'appwrite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  appwrite = new Appwrite();
  account = new Account(this.appwrite)
  userAuthorized = false;

  constructor() {
    this.appwrite
      .setEndpoint(environment.APPWRITE_ENDPOINT) // Appwrite Endpoint
      .setProject(environment.PROJECT_ID);
    const promise = this.account.getSession('current')
    promise.then(
      (response: any) => {
        this.userAuthorized = response.current;
        console.log(response)
      },
      (error) => {
        this.userAuthorized = false;
        console.log(error)
      }
    );
    if (this.userAuthorized === undefined) {
      this.userAuthorized = false;
    }
  }
}