import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { TextTransformPipe } from './text-transform.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule
  ],
  declarations: [PipesExamplesComponent, TextTransformPipe]
})
export class PipesModule { }
