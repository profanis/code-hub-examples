import { NgModule } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ViewChildComComponent } from './view-child-com/view-child-com.component';


const routes: Routes = [
  {path: "view-child", component: ViewChildComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewChildComponent, ViewChildComComponent],
  exports: [RouterModule]
})
export class VewChildModule { }
