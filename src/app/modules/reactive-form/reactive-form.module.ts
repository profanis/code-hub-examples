import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ReactiveFormComponent],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
