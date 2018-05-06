import { BasicFormRoutingModule } from './basic-form.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BasicFormRoutingModule
  ],
  declarations: [BasicFormComponent],
  exports: [BasicFormComponent]
})
export class BasicFormModule {

}
