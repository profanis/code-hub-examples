import { Component, OnInit } from "@angular/core";
import { BugReportSystemService } from "../bug-report-system.service";

@Component({
  selector: "app-http-service",
  template: `
    Press the button <button type="button" (click)="logResults()">Click!</button>
    <pre>
      {{results | json}}
    </pre>
  `,
  styleUrls: ["./http-service.component.scss"]
})
export class HttpServiceComponent implements OnInit {

  results: any;
  constructor(private bugReportSystemService: BugReportSystemService) { }

  ngOnInit() {
  }

  logResults() {
    this.bugReportSystemService.getBugs().subscribe((response) => {
      this.results = response;
      console.log(response);
    });
  }

}
