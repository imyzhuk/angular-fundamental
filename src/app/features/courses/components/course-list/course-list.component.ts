import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseType} from "../../../../models/course-types";
import {Router} from "@angular/router";
import {UserStoreService} from "../../../user/services";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  constructor(private router: Router){
  }

  @Input() courses: CourseType[] = [];

  @Output() removeCourse = new EventEmitter;

  ngOnInit(): void {
  }
}
