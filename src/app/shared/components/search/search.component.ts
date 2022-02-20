import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() placeholder?:string;
  @Input() isSearchButtonClicked?: boolean;
  @Output() onSearchButtonClick = new EventEmitter();

  searchResult = ""

  constructor() { }

  ngOnInit(): void {
  }

}
