import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedRouterOutletParentComponent } from './nested-router-outlet-parent/nested-router-outlet-parent.component';
import { NestedRouterOutletChildComponent } from './nested-router-outlet-child/nested-router-outlet-child.component';
import { Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: "nested-router-outlet/:id",
    component: NestedRouterOutletParentComponent,
    children: [
      {
        path: "children",
        component: NestedRouterOutletChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NestedRouterOutletParentComponent, NestedRouterOutletChildComponent],
  exports: [RouterModule]
})
export class NestedRouterOutletModule { }
