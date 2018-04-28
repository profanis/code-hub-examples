import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BugReportSystemService } from "./bug-report-system.service";
import { HttpServiceComponent } from "./http-service/http-service.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HttpServiceComponent],
  providers: [BugReportSystemService],
  exports: [HttpServiceComponent]
})
export class HttpServiceModule { }
