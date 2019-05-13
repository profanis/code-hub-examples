import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeMeBoldOnHoverRoutingModule } from './make-me-bold-on-hover-routing.module';
import { BoldMeComponent } from './bold-me/bold-me.component';
import { MakeMeBoldOnHoverDirective } from './make-me-bold-on-hover.directive';

@NgModule({
  imports: [
    CommonModule,
    MakeMeBoldOnHoverRoutingModule
  ],
  declarations: [BoldMeComponent, MakeMeBoldOnHoverDirective]
})
export class MakeMeBoldOnHoverModule { }
