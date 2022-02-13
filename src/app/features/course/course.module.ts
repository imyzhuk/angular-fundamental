import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import {CourseCardComponent} from "./components";
import { TransformDurationPipe } from './pipes/transform-duration.pipe';

@NgModule({
  declarations: [
    CourseComponent,
    CourseCardComponent,
    TransformDurationPipe
  ],
  exports: [
    CourseCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
