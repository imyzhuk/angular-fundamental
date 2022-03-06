import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesModule} from "./features/courses/courses.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";
import {CourseModule} from "./features/course/course.module";
import {LoginModule} from "./features/login/login.module";
import {RegistrationModule} from "./features/registration/registration.module";
import {AuthorsService, AuthorsStoreService, CoursesService, CoursesStoreService} from "./shared/services";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./features/auth/auth.module";
import {UserModule} from "./features/user/user.module";

const services = [AuthorsService, CoursesService, AuthorsStoreService, CoursesStoreService];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    FontAwesomeModule,
    SharedModule,
    LoginModule,
    RegistrationModule,
    AuthModule,
    HttpClientModule,
    UserModule
  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
