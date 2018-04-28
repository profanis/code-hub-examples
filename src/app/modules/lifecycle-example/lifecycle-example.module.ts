import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [LifeCycleComponent, LifeCycleChildComponent],
  exports: [LifeCycleComponent]
})
export class LifecycleExampleModule { }
