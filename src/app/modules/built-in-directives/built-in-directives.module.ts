import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { BuiltInDirectivesService } from "./built-in-directives.service";
import { BuiltInDirectivesComponent } from "./built-in-directives/built-in-directives.component";
import { BuiltInDirectivesSwitchComponent } from './built-in-directives-switch/built-in-directives-switch.component';

const routes: Routes = [
  {path: "built-in-directives", component: BuiltInDirectivesComponent},
  {path: "built-in-directives-switch", component: BuiltInDirectivesSwitchComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuiltInDirectivesComponent, BuiltInDirectivesSwitchComponent],
  providers: [BuiltInDirectivesService],
  exports: [RouterModule]
})
export class BuiltInDirectivesModule { }
