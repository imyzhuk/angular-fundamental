import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {
  ButtonComponent,
  HeaderComponent,
  InfoComponent,
  InputComponent,
  ModalComponent,
  SearchComponent
} from "./components";
import {EmailValidatorDirective, PasswordVisibilityDirective} from "./directives";
import {CreationDatePipe, DurationPipe, StringJoinerImpurePipe, StringJoinerPipe} from "./pipes";

const components = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent,ModalComponent, InputComponent];
const directives = [EmailValidatorDirective, PasswordVisibilityDirective];
const pipes = [DurationPipe, CreationDatePipe, StringJoinerPipe, StringJoinerImpurePipe];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [...components, ...directives, ...pipes]
})
export class SharedModule { }
