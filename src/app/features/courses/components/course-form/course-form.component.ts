import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {NameValidator} from "../../../../shared/directives/name-validator/name-validator.directive";
import {NumberValidator} from "../../../../shared/directives";
import {ActivatedRoute} from "@angular/router";
import {CoursesFormType} from "../../../../models/course-types";
import {AuthorsStoreService, CoursesStoreService} from "../../../../shared/services";
import {UUID} from "uuid-generator-ts";
import {Author} from "../../../../models/user-types";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  submitButtonName: string = ""

  form : FormGroup;
  constructor(private route: ActivatedRoute,
              private authorsStore: AuthorsStoreService,
              private coursesStore: CoursesStoreService
  ){
    const coursesFormType = this.route.snapshot.url[1].path as CoursesFormType;
    if(coursesFormType === "edit"){
      this.submitButtonName = "Edit";
    } else if (coursesFormType === 'add'){
      this.submitButtonName = "Add";
    }



    this.form = new FormGroup({
      title: new FormControl("", [
        Validators.required,
      ]),
      description: new FormControl("", [
        Validators.required
      ]),
      newAuthor: new FormControl("", NameValidator(/^[A-Za-z0-9]+$/i, true)),
      authors: new FormArray([]),
      duration: new FormControl("", [
        Validators.required,
        NumberValidator(0)
      ])
    });
  }

  addAuthor(){
    if(this.form.controls['newAuthor'].invalid) return;
    const newAuthor = this.form.value.newAuthor;
    this.form.controls['newAuthor'].reset("");
    this.authors.push(new FormControl(newAuthor));
  }

  get authors() : FormArray{
    return this.form.controls['authors'] as FormArray;
  }

  deleteAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  submit(){
    const courseId = new UUID().getDashFreeUUID();
    const form = this.form.value;
    this.authorsStore.addAuthors(form.authors)
      .subscribe(
        (authors => {
          this.coursesStore.createCourse(
            {
              id: courseId,
              authors: authors,
              description: form.description,
              duration: form.duration,
              title: form.title,
              creationDate: form.creationDate
            }
          )
        })
      ),
      null,
      () => this.authorsStore.isLoading$$.next(false)
  }
}
