import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {NameValidator} from "../../../../shared/directives/name-validator/name-validator.directive";
import {NumberValidator} from "../../../../shared/directives";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form : FormGroup;
  constructor(){
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
    console.log(this.form.value);
  }
}
