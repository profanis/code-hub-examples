import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';

const routes: Routes = [
  {path: 'pipes_examples', component: PipesExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
