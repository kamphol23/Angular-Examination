import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  selectedTravel: object = {};
  travelData: TravelData [] = [
    {
    destination:' Cologne',
      info: 'Var där allt började. Cologne höll det första Dota 2 International ',
      transportation: 'Man åker på bratwurst',
    },
    {
      destination: 'Settle',
      info: 'Den svenska dota laget Alliance tog titlet som mästarna i key arena under den fjärde International',
      transportation: 'Kom ihåg att alltid ha tp-scroll på dig',
    },
    {
      destination: 'Vancouver',
      info: 'International hölls i Rogers arena. Det laget som tog hem Aegis of immortal var OG',
      transportation: 'Relocate av IO',
    }
  ];


  closeAndopen ($event){
    if (this.selectedTravel === $event){
      this.selectedTravel = {};
    } else {
      this.selectedTravel = $event
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
interface TravelData {
  destination: string,
  info: string,
  transportation: string
}
