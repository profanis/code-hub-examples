import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives-switch',
  templateUrl: './built-in-directives-switch.component.html',
  styleUrls: ['./built-in-directives-switch.component.css']
})
export class BuiltInDirectivesSwitchComponent implements OnInit {

  items: any[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        "name": "Douglas  Pace",
        "age": 35,
        "country": 'MARS'
      },
      {
        "name": "Mcleod  Mueller",
        "age": 32,
        "country": 'USA'
      },
      {
        "name": "Day  Meyers",
        "age": 21,
        "country": 'HK'
      },
      {
        "name": "Aguirre  Ellis",
        "age": 34,
        "country": 'UK'
      },
      {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'USA'
      }
    ];
  }

}
