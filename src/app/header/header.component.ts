import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<boolean>();
  recipeStatus = true;
  constructor() { }

  ngOnInit() {
  }

  ontoggleView() {
    this.recipeStatus= !this.recipeStatus;
    this.recipeClicked.emit(this.recipeStatus);
  }
}
