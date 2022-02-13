import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() okButtonText!: string;
  @Input() cancelButtonText!: string;

  faSkullCrossbones = faSkullCrossbones;

  @Input() modalResult: null | boolean = null;
  @Output() modalResultChange = new EventEmitter();
  @Input() isModalVisible!: boolean;
  @Output() isModalVisibleChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal(){
    this.isModalVisibleChange.emit(false);
  }

  okButtonClick(){
    this.modalResultChange.emit(true)
    this.onCloseModal();
  }
  cancelButtonClick(){
    this.modalResultChange.emit(false)
    this.onCloseModal();
  }

}
