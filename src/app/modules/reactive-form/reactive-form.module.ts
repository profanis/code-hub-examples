import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ReactiveFormComponent],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
