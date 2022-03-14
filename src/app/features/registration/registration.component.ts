import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailLengthValidator, EmailPatternValidator, LengthValidator} from "../../shared/directives";
import {AuthFacade} from "../../auth/store/auth.facade";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: FormGroup;
  isRegistrated: boolean = false;
  error: string | null = null

  constructor(private auth: AuthFacade) {
    this.auth.clearError();
    this.auth.isRegistered$.subscribe(isRegistered => this.isRegistrated = isRegistered)
    this.auth.getLoginErrorMessage$.subscribe(error => this.error = error)
    this.form = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        LengthValidator(6)
      ]),
      email: new FormControl("", [
        Validators.required,
        EmailPatternValidator,
        EmailLengthValidator,
      ]),
      password: new FormControl("", [
        Validators.required,
        LengthValidator(6)
      ])
    });
  }

  submit(){
    this.auth.register({
      name: this.form.value.name,
      password: this.form.value.password,
      email: this.form.value.email,
    })
  }
}
