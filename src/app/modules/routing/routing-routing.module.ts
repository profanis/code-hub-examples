import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentaComponent } from './parenta/parenta.component';
import { ParentbComponent } from './parentb/parentb.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';

const routes: Routes = [
  {
    path: 'parenta', component: ParentaComponent,
    children: [
      {path: 'childa', component: ChildaComponent}
    ]
  },
  {
    path: 'parentb', component: ParentbComponent,
    children: [
      {path: 'childb', component: ChildbComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
