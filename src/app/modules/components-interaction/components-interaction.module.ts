import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { ComponentInteractionChildComponent } from "./component-interaction-child/component-interaction-child.component";
import { ComponentInteractionParentComponent } from "./component-interaction-parent/component-interaction-parent.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: "components-interaction", component: ComponentInteractionParentComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ComponentInteractionParentComponent,
    ComponentInteractionChildComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsInteractionModule { }
