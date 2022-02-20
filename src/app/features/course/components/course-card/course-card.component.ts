import {Component, Input, OnInit} from '@angular/core';
import {CourseType} from "../../../../models/course-types";

const getRandomColorNumber = () => {
  let randomColorNumber = Math.floor(Math.random() * 256);
  return randomColorNumber.toString(16);
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  public color?: string;

  @Input() editable?: boolean
  @Input() course! : CourseType

  constructor() {
  }

  ngOnInit(): void {
    this.color = `#${getRandomColorNumber()}${getRandomColorNumber()}${getRandomColorNumber()}`;
  }

}
