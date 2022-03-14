import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthModule
  ],
  providers: []
})
export class LoginModule { }
