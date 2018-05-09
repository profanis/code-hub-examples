import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Customer } from "./cusomer.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"]
})
export class BasicFormComponent implements OnInit {

  model: Customer;
  favouriteLanguageIsValid: boolean;
  programmingLanguages = ["TS", "JS", "C#"];

  constructor(private route: ActivatedRoute) {
    console.log("Snapshot is: ", this.route.snapshot.params["id"]);
    this.route.params.subscribe(params => console.log("With subscription: ", params));
    // console.log("Snapshot is: ", this.route.snapshot.queryParamMap);
    // this.route.queryParams.subscribe(params => console.log("With subscription: ", params));
  }

  ngOnInit() {
    this.model = new Customer();
    this.model.isExperienced = false;
    this.model.favouriteLanguage = null;
  }

  capitalize(value: string) {
    this.model.firstName = value.toUpperCase();
  }

  favLangIsValid(event) {
    this.favouriteLanguageIsValid = !(this.model.favouriteLanguage === null);
  }

  formSubmit(form: NgForm) {
    this.favLangIsValid(this.model.favouriteLanguage);

    if (!form.valid || !this.favouriteLanguageIsValid) {
      return;
    }

    console.log(form.value);
  }
}
