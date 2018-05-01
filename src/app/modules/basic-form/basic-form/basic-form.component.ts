import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Customer } from "./cusomer.model";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"]
})
export class BasicFormComponent implements OnInit {

  model: Customer;
  favouriteLanguageIsValid: boolean;
  programmingLanguages = ["TS", "JS", "C#"];
  constructor() { }

  ngOnInit() {
    this.model = new Customer();
    this.model.isExperienced = false;
    this.model.favouriteLanguage = null;
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
