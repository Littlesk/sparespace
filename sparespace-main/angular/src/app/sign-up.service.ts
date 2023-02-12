import { Injectable } from '@angular/core';
import { User } from './user';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  users: User[] = [];

  constructor() { }

  addUser(firstName: string, lastName: string, email: string, password: string, phone:string) {
    let user: User = {firstName,lastName,email,password,phone};
    this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

  findUser(email: string, password: string){
    let user = this.users.find((u)=>{return (u.email==email && u.password == password)});
    return user; //returns undef if not found
  }
}
