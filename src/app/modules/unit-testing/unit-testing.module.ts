import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitTestingRoutingModule } from './unit-testing-routing.module';
import { UnitTestingComponent } from './unit-testing/unit-testing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UnitTestingRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UnitTestingComponent]
})
export class UnitTestingModule { }
