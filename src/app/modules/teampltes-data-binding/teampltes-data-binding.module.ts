import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplatesDataBindingComponent } from "./templates-data-binding/templates-data-binding.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TemplatesDataBindingComponent],
  exports: [TemplatesDataBindingComponent]
})
export class TeampltesDataBindingModule { }
