import {Component, Injectable, OnInit} from '@angular/core';
import {CourseType} from "../../models/course-types";
import {AuthorsService, AuthorsStoreService, CoursesService, CoursesStoreService} from "../../shared/services";
import {Author} from "../../models/user-types";
import {map, Observable, switchMap, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UserStoreService} from "../user/services";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CourseType[] | undefined;
  authors: Author[] | undefined;
  isLoading: boolean = false
  editable: boolean = false

  constructor(
              private coursesService: CoursesService,
              private authorsService: AuthorsService,
              private coursesStoreService: CoursesStoreService,
              private authorsStoreService: AuthorsStoreService,
              private userStore: UserStoreService
  ) {
    this.coursesStoreService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
    this.authorsStoreService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);

    this.coursesStoreService.courses$
      .pipe(
        switchMap((courses) => this.authorsStoreService.authors$
          .pipe(
            map(authors => {
              return courses = courses.map(course => {
                const convertedAuthorsName = course.authors?.filter(authorName => authors.some(author => author.name === authorName));
                course.authors = course.authors.map(author => authors.find(el => el.id === author)?.name || "");
                course.authors = course.authors.concat(convertedAuthorsName);
                course.authors = course.authors?.filter(author => author !== "");
                return course;
              })
            })
          )
        )
      )
      .subscribe(courses => this.courses = courses)

    this.userStore.isAdmin$
      .subscribe(isAdmin => this.editable = isAdmin)

  }

  ngOnInit() {
  }

  onRemoveCourse(removedCourseIndex: string){
    this.coursesStoreService.deleteCourse(removedCourseIndex)
  }

  onSearchButtonClick(searchResult: string){
    console.log("Search result: " + searchResult)
  }
}
