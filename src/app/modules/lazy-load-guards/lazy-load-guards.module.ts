import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "lazy-load-c1"},
  {path: "lazy-load-c1", component: Child1Component},
  {path: "lazy-load-c2", component: Child2Component},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Child1Component, Child2Component],
  exports: [RouterModule]
})
export class LazyLoadGuardsModule { }
