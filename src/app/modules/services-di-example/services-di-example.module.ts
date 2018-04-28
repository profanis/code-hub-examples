import { ServicesDiService } from "./services-di.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceDiComponent } from "./service-di/service-di.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceDiComponent],
  providers: [ServicesDiService],
  exports: [ServiceDiComponent]
})
export class ServicesDiExampleModule { 

}
