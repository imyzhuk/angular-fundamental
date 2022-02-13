import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseType} from "../../../../models/course-types";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() courses: CourseType[] = [];

  @Output() removeCourse = new EventEmitter;

  ngOnInit(): void {
  }

  onRemoveCourse(index: number){
    this.removeCourse.emit(index);
  }
}
