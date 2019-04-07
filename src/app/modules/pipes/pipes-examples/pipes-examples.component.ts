import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  template: `
    <p>
      This text should be upper case --> {{'Hello World' | textTransform:'upper'}}
    </p>
    <p>
      This text should be lower case --> {{'Hello World' | textTransform:'lower'}}
    </p>
  `,
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
