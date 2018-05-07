import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

const routes: Routes = [
  {path: "reactive-form", component: ReactiveFormComponent}
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReactiveFormComponent],
  exports: []
})
export class MyReactiveFormModule { }
