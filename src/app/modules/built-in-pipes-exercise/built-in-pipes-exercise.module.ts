import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuiltInPipesExerciseRoutingModule } from './built-in-pipes-exercise-routing.module';
import { PipeSolutionComponent } from './pipe-solution/pipe-solution.component';

@NgModule({
  imports: [
    CommonModule,
    BuiltInPipesExerciseRoutingModule
  ],
  declarations: [PipeSolutionComponent]
})
export class BuiltInPipesExerciseModule { }
