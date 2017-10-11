import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form = new FormGroup({
    username: new  FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace 
    ], UsernameValidators.shouldBeUnique),
    password: new FormControl('', 
      Validators.required
    )
  });

  get username() {
    return this.form.get('username');
  };

  get password() {
    return this.form.get('password');
  };

}
