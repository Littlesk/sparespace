import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';
import { SignUpService } from '../sign-up.service';
import { AppwriteService } from '../shared/appwrite.service';
import { ID } from 'appwrite';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  /*users = this.signup.getUsers();

  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });

  constructor(private formBuilder: FormBuilder, private email: EmailService, private signup: SignUpService) {}

  register(): void{
    this.signup.addUser(this.registerForm.value.firstName ?? '', 
      this.registerForm.value.lastName ?? '', this.registerForm.value.email ?? '',
      this.registerForm.value.password ?? '', this.registerForm.value.phone ?? '');
      this.email.sendRegistered(this.registerForm.value.email ?? '');
      this.registerForm.reset();
  }
  */
  
  registerFormGroup: FormGroup;
  registerSuccess: boolean | null = null;
   // constructor(private formBuilder: FormBuilder, private signup: SignUpService) {}
   constructor(private formBuilder: FormBuilder,
    private aws: AppwriteService,
    /*private router: Router*/) {
    this.registerFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.registerFormGroup.updateValueAndValidity()
  }

  handleRegister(): void{
    this.aws.account.create(ID.unique(),
      this.registerFormGroup.get('email')?.value,
      this.registerFormGroup.get('password')?.value,
      this.registerFormGroup.get('firstName')?.value + this.registerFormGroup.get('lastName')?.value
      ).then(
        (response: any) => {
          this.aws.userAuthorized = response.current;
          this.registerSuccess = true;
        }, (error) => {
          this.aws.userAuthorized = false;
          this.registerSuccess = false;
          this.registerFormGroup.reset();
        }
      )
  }
}
