import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentInteractionParentComponent } from "./component-interaction-parent/component-interaction-parent.component";
import { ComponentInteractionChildComponent } from "./component-interaction-child/component-interaction-child.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ComponentInteractionParentComponent,
    ComponentInteractionChildComponent
  ],
  exports: [
    ComponentInteractionParentComponent
  ]
})
export class ComponentsInteractionModule { }
