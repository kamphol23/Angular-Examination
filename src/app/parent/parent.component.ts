import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() travelData;
  @Output() onAction = new EventEmitter<any>();

  showDestination(){
    this.onAction.emit(this.travelData);

  }

  constructor() { }

  ngOnInit() {
  }

}
