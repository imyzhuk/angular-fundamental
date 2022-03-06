import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailLengthValidator, EmailPatternValidator, LengthValidator} from "../../shared/directives";
import {CoursesService} from "../../shared/services";
import {AuthService} from "../auth/services/auth/auth.service";
import {catchError, of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form : FormGroup;
  isRegistrated: boolean = false;
  constructor(private auth: AuthService){
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
    }).pipe(
      catchError(err => of(err))
    )
      .subscribe(response => {
        if(response?.successful || response?.error.successful){
          this.isRegistrated = true;
        } else {
          alert(response.error.errors[0]);
        }
      });
  }
}
