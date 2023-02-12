import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 // import { SignUpService } from '../sign-up.service';
//import { Router } from '@angular/router';
import { AppwriteService } from '../shared/appwrite.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  //users = this.signup.getUsers();
  /*
  loginRenters = this.formBuilder.group({
    email: '',
    password: ''
  });
  */
  loginFormGroup: FormGroup;
  loginSuccess: boolean | null = null;
   // constructor(private formBuilder: FormBuilder, private signup: SignUpService) {}
   constructor(private formBuilder: FormBuilder,
    private aws: AppwriteService /*,
    private router: Router*/) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loginFormGroup.updateValueAndValidity()
  }
   /*onSubmit(): void {
    let result = this.signup.findUser(this.loginRenters.value.email ?? '', this.loginRenters.value.password ?? '');
    if (result == undefined) {
      window.alert("The user could not be found");
    } else {
      window.alert("Welcome " + result.firstName);
    }
  }  */
  handleLogin(): void{
    this.aws.account.createEmailSession(
      this.loginFormGroup.get('email')?.value,
      this.loginFormGroup.get('password')?.value).then(
        (response: any) => {
          this.aws.userAuthorized = response.current;
          this.loginSuccess = true;
          console.log("Log in successfully")
        }, (error) => {
          this.aws.userAuthorized = false;
          this.loginSuccess = false;
          this.loginFormGroup.reset();
        }
      )
  }
}
