import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseType} from "../../models/course-types";
import {AuthorsStoreService, CoursesStoreService} from "../../shared/services";
import {Author} from "../../models/user-types";
import {map, switchMap, tap} from "rxjs";
import {UserStoreService} from "../user/services";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  private id: string = ""
  courses: CourseType[] | undefined;
  authors: Author[] | undefined;
  isLoading: boolean = false
  editable: boolean = false

  @Input() course! : CourseType

  constructor(private route: ActivatedRoute,
              private coursesStoreService: CoursesStoreService,
              private authorsStoreService: AuthorsStoreService,
              private userStoreService: UserStoreService,
              private router: Router
  ) {
    this.userStoreService.isAdmin$
      .subscribe(isAdmin => this.editable = isAdmin)

  }

  ngOnInit() {
      const courseId = this.route.snapshot.params['id'];
      if (courseId) {
        this.id = courseId;
        this.coursesStoreService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
        this.authorsStoreService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);

        this.coursesStoreService.courses$
          .pipe(
            switchMap((courses) => this.authorsStoreService.authors$
              .pipe(
                map(authors => {
                  const course = courses.find((course) => course.id === this.id) || {} as CourseType;
                  const convertedAuthorsName = course.authors?.filter(authorName => authors.some(author => author.name === authorName))
                  course.authors = course.authors?.map(author => authors?.find(el => el.id === author)?.name || "");
                  course.authors = course.authors?.filter(author => author !== "");
                  course.authors = course.authors?.concat(convertedAuthorsName);
                  return course
                })
              )
            )
          )
          .subscribe(course => this.course = course)
      }
  }

  getCourses(){
    this.coursesStoreService.getAll();
  }

  getAuthors(){
    this.authorsStoreService.getAll();
  }

  onRemoveCourse(id: string){
    this.coursesStoreService.deleteCourse(id)
  }

  showCourse(id: string){
    this.router.navigate([`courses`, id])
  }

  editCourse(id: string){
    this.router.navigate([`courses`, 'edit', id])
  }

}
