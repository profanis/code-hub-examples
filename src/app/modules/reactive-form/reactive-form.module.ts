import { ReactiveFormRoutingModule } from './reactive-form.routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule
  ],
  declarations: [ReactiveFormComponent],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
