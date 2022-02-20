import { Component, OnInit } from '@angular/core';
import {CourseType} from "../../models/course-types";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  isHelpModalOpened: boolean = false;
  modalResult: boolean | null = null;

  courses: CourseType[] = [
    {
      title: "Angular",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor eius esse est exercitationem itaque laborum, omnis quae tempore velit. A consectetur debitis fugiat iste maxime porro quaerat veniam? Laudantium?\n",
      creationDate: new Date(),
      duration: 121,
      authors: ["Alex"],
      editable: true
    },
    {
      title: "Angular",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor eius esse est exercitationem itaque laborum, omnis quae tempore velit. A consectetur debitis fugiat iste maxime porro quaerat veniam? Laudantium?\n",
      creationDate: new Date(),
      duration: 111,
      authors: ["Alex", "Marat"],
      editable: false
    },
    {
      title: "Angular",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor eius esse est exercitationem itaque laborum, omnis quae tempore velit. A consectetur debitis fugiat iste maxime porro quaerat veniam? Laudantium?\n",
      creationDate: new Date(),
      duration: 19,
      authors: ["Alina", "Marat"],
      editable: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveCourse(removedCourseIndex: number){
    this.courses.splice(removedCourseIndex, 1);
  }

  openHelpModal(){
    this.isHelpModalOpened = true;
  }

  onSearchButtonClick(searchResult: string){
    console.log("Search result: " + searchResult)
  }
}
