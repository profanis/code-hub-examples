import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ScssExampleComponent } from "./scss-example/scss-example.component";

const routes: Routes = [
  {path: "scss_example", component: ScssExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScssExampleRoutingModule { }
