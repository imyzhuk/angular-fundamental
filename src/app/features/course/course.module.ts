import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import {CourseCardComponent} from "./components";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CourseComponent,
    CourseCardComponent
  ],
  exports: [
    CourseCardComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CourseModule { }
