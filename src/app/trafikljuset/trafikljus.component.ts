import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Trafikljus',
  templateUrl: './trafikljus.component.html',
  styleUrls: ['./trafikljus.component.css']
})
export class TrafikljusComponent implements OnInit {
  
  lightSignal(){
    if (this.index === 3){
      this.index = 0;
    } else {
      this.index = this.index+1
    }
  }

  index: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
