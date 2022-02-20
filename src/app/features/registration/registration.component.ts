import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailLengthValidator, LengthValidator} from "../../shared/directives";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form : FormGroup;
  constructor(){
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        LengthValidator(6)
      ]),
      email: new FormControl("", [
        Validators.required,
        EmailLengthValidator
      ]),
      password: new FormControl("", Validators.required)
    });
  }

  submit(){
    console.log(this.form.value);
  }

}
