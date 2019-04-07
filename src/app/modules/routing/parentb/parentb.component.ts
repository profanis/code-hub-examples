import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentb',
  template: `
    <p>
      parentb works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ParentbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
