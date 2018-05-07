import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { LifeCycleChildComponent } from "./life-cycle-child/life-cycle-child.component";
import { LifeCycleComponent } from "./life-cycle/life-cycle.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: "life-cycle-example", component: LifeCycleComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LifeCycleComponent, LifeCycleChildComponent],
  exports: [RouterModule]
})
export class LifecycleExampleModule { }
