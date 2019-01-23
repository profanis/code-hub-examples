import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ScssExampleRoutingModule } from "./scss-example-routing.module";
import { ScssExampleComponent } from "./scss-example/scss-example.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ScssExampleRoutingModule
  ],
  declarations: [ScssExampleComponent]
})
export class ScssExampleModule { }
