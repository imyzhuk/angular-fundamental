import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth/auth.service";
import {SessionStorageService} from "./services/session-storage/session-storage.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizedGuard, NotAuthorizedGuard} from "./guards";
import {TokenInterceptor} from "./interceptors/token.interceptor";

const services = [AuthService, SessionStorageService];
const guards = [AuthorizedGuard, NotAuthorizedGuard]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [...services, ...guards, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class AuthModule { }
