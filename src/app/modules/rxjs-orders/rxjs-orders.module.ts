import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RxjsOrdersComponent } from './rxjs-orders/rxjs-orders.component';
import { RxjsOrdersService } from './rxjs-orders.service';


const routes: Routes = [
  {path: "rxjs-orders", component: RxjsOrdersComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RxjsOrdersComponent],
  exports: [RxjsOrdersComponent, RouterModule],
  providers: [RxjsOrdersService]
})
export class RxjsOrdersModule { }
