import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {far, IconName} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string
  @Input() iconName?: IconName
  @Input() color?: string
  @Input() myStyle?: string
  @Output() onClick = new EventEmitter();

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
  ngOnInit(): void {
  }


}
