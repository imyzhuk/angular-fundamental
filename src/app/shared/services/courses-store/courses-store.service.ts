import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap, tap} from "rxjs";
import {CoursesService} from "../courses/courses.service";
import {CourseType} from "../../../models/course-types";

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private courses$$: BehaviorSubject<CourseType[]> = new BehaviorSubject<CourseType[]>([])
  courses$: Observable<CourseType[]> = this.courses$$.asObservable();
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading$$.asObservable()

  constructor(private coursesService: CoursesService) {
  }

  getAll(){
    this.isLoading$$.next(true)
    this.coursesService.getAll()
      .pipe(
        tap(() => this.isLoading$$.next(false)),
      )
      .subscribe(({result: courses}) => {
        this.courses$$.next(courses);
      });
  }

  deleteCourse(id: string) {
    this.isLoading$$.next(true)
    this.coursesService.deleteCourse(id)
      .pipe(
        switchMap((response) => this.courses$.pipe(
          map(courses => courses.filter((course) => course.id !== id))
        )),
        tap(() => this.isLoading$$.next(false)),
      )
      .subscribe(
        (courses) => {
         this.courses$$.next(courses)
        },
        (error) => alert("Error: " + error)
      );
  }

  createCourse(course: CourseType) {
    this.isLoading$$.next(true)
    this.coursesService.createCourse(course)
      .pipe(
        switchMap((response) => this.courses$),
        tap(() => this.isLoading$$.next(false)),
      )
      .subscribe(
        (courses) => {
          courses.push(course);
          this.courses$$.next(courses)
        },
        (error) => alert("Error: " + error)
      );
  }
}
