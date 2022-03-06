import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CourseType} from "../../../models/course-types";
import {AppConstants} from "../../../constants/app-constants";
import {Response} from "../../../models/response-types";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly backendBaseUrl: string;

  constructor(private http: HttpClient) {
    this.backendBaseUrl = AppConstants.BACKEND_BASE_URL;
  }

  getAll(){
    return this.http.get<Response<CourseType[]>>(this.backendBaseUrl + "/courses/all");
  }

  createCourse(course: CourseType){
    return this.http.post(this.backendBaseUrl + "/courses/add", course)
  }

  getCourse(courseId: string){
    return this.http.get(this.backendBaseUrl + `/courses/${courseId}`)
  }

  editCourse(course: CourseType){
    return this.http.put(this.backendBaseUrl + `/courses/${course.id}`, {});
  }

  deleteCourse(courseId: string){
    return this.http.delete(this.backendBaseUrl + `/courses/${courseId}`)
  }
}
