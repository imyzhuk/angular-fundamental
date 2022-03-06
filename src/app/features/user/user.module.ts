import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserService, UserStoreService} from "./services";
import {AdminGuard} from "./guards";

const services = [UserService, UserStoreService]
const guards = [AdminGuard]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [...services, ...guards]
})
export class UserModule { }
