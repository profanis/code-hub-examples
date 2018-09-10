import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styles: ['.component_border {border: 2px solid green; padding: 10px;}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildTwoComponent {}
