import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Customer } from "../../basic-form/basic-form/cusomer.model";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  customer = new Customer();

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });
  }

}
