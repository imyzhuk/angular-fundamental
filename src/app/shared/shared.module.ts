import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent, HeaderComponent, InfoComponent, SearchComponent} from "./components";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ModalComponent } from './components/modal/modal.component';

const components = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent];

@NgModule({
  declarations: [...components, ModalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...components, ModalComponent]
})
export class SharedModule { }
