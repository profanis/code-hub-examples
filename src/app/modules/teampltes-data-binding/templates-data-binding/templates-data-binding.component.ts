import { Component, OnInit } from "@angular/core";
import { AdvancedDiService } from "../../advanced-di-example/advanced-di.service";

@Component({
  selector: "app-templates-data-binding",
  templateUrl: "./templates-data-binding.component.html",
  styleUrls: ["./templates-data-binding.component.scss"],
  // providers: [AdvancedDiService]
})
export class TemplatesDataBindingComponent implements OnInit {

  firstName = "INITIAL VALUE";
  lastName: string;

  constructor(private advancedDiService: AdvancedDiService) { }

  ngOnInit() {
    this.advancedDiService.foo;
  }


  submitForm() {
    console.log(`The first name is ${this.firstName} and the last name is ${this.lastName}`);
  }

}
