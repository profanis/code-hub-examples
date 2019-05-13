import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeSolutionComponent } from './pipe-solution/pipe-solution.component';

const routes: Routes = [
  {
    path: 'built-in-pipes', component: PipeSolutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuiltInPipesExerciseRoutingModule { }
