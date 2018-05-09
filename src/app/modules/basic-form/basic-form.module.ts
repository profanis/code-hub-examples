import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BasicFormComponent } from "./basic-form/basic-form.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  {path: "basic-form", component: BasicFormComponent},
  {path: "basic-form/:id", component: BasicFormComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicFormComponent],
  exports: [RouterModule]
})
export class BasicFormModule {

}
