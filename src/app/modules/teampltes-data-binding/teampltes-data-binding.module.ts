import { NgModule } from "@angular/core";

import { SharedModule } from "./../../shared/shared.module";
import { TemplatesDataBindingComponent } from "./templates-data-binding/templates-data-binding.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: "templates-binding", component: TemplatesDataBindingComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [TemplatesDataBindingComponent],
  exports: [RouterModule]
})
export class TeampltesDataBindingModule { }
