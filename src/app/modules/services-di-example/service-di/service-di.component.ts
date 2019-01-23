import { Component, OnInit } from "@angular/core";
import { ServicesDiService } from "../services-di.service";

@Component({
  selector: "app-service-di",
  templateUrl: "./service-di.component.html",
  styleUrls: ["./service-di.component.scss"]
})
export class ServiceDiComponent implements OnInit {

  constructor(private servicesDiService: ServicesDiService) { }

  ngOnInit() {
    console.log(this.servicesDiService.getItems());
  }

}
