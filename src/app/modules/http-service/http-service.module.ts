import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "./../../shared/shared.module";
import { BugReportSystemService } from "./bug-report-system.service";
import { HttpServiceComponent } from "./http-service/http-service.component";

const routes: Routes = [
  {path: "basic-http-service", component: HttpServiceComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HttpServiceComponent],
  providers: [BugReportSystemService],
  exports: [RouterModule]
})
export class HttpServiceModule { }
