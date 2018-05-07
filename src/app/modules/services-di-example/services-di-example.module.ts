import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { ServiceDiComponent } from "./service-di/service-di.component";
import { ServicesDiService } from "./services-di.service";

const routes: Routes = [
  {path: "services-di", component: ServiceDiComponent}
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceDiComponent],
  providers: [ServicesDiService],
  exports: [RouterModule]
})
export class ServicesDiExampleModule {

}
