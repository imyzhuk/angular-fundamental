import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseModule} from "../course/course.module";
import {CourseFormComponent, CourseListComponent} from "./components";
import {LoginModule} from "../login/login.module";
import {RegistrationModule} from "../registration/registration.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseFormComponent
  ],
    imports: [
      CommonModule,
      SharedModule,
      CourseModule,
      LoginModule,
      RegistrationModule,
      FormsModule,
      ReactiveFormsModule
    ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
