import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenta',
  template: `
    <p>
      parenta works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ParentaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
