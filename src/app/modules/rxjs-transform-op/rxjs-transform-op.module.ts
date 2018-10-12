import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTransformOpComponent } from './rxjs-transform-op/rxjs-transform-op.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "rxjs-transform_op", component: RxjsTransformOpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RxjsTransformOpComponent],
  exports: [RouterModule]
})
export class RxjsTransformOpModule { }
