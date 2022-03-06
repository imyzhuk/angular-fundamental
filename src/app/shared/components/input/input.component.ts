import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type:string = "text";
  @Input() placeholder?:string;
  @Input() formControlName?:any;
  @Input() errorMessage?:string;
  @Input() name:string = "";
  @Input() value:string = "";
  @Output() valueChange = new EventEmitter<string>();
  onValueChange(model: string){
    this.value = model;
    this.valueChange.emit(model);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
