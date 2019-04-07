import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { ParentaComponent } from './parenta/parenta.component';
import { ParentbComponent } from './parentb/parentb.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule
  ],
  declarations: [ParentaComponent, ParentbComponent, ChildaComponent, ChildbComponent]
})
export class RoutingModule { }
