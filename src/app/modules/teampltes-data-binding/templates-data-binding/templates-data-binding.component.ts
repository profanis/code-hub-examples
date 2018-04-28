import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-templates-data-binding",
  templateUrl: "./templates-data-binding.component.html",
  styleUrls: ["./templates-data-binding.component.css"]
})
export class TemplatesDataBindingComponent implements OnInit {

  firstName = "INITIAL VALUE";
  lastName: string;

  constructor() { }

  ngOnInit() {
  }


  submitForm() {
    console.log(`The first name is ${this.firstName} and the last name is ${this.lastName}`);
  }

}
