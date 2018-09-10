import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styles: ['.component_border {border: 2px solid blue; padding: 10px;}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildOneComponent {}
