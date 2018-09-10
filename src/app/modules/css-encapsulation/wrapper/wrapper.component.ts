import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styles: ['.component_border {border: 2px solid red; padding: 10px;}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WrapperComponent {}
