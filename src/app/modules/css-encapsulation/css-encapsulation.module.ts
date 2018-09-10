import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ChildOneComponent } from './wrapper/child-one/child-one.component';
import { ChildTwoComponent } from './wrapper/child-one/child-two/child-two.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "css-encapsulation", component: WrapperComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WrapperComponent, ChildOneComponent, ChildTwoComponent],
  exports: [
    RouterModule
  ]
})
export class CssEncapsulationModule { }
