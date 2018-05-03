import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { Customer } from "../../basic-form/basic-form/cusomer.model";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  customer = new Customer();
  programmingLanguages = ["TS", "JS", "C#"];

  constructor() { }

  firstNameFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  firstNameFormControlErrorMessage = "";
  firstNameFormControlValidationMessages = {
    required : "The first name is required",
    minlength: "The minlength is 3 characters"
  };

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: this.firstNameFormControl,
      lastName: new FormControl("", Validators.required),
      isExperienced: new FormControl("", Validators.required),
      angular: new FormControl("", Validators.required),
      favouriteLanguage: new FormControl("", Validators.required),
      jsversion: new FormControl()
    });

    this.firstNameFormControl.valueChanges.subscribe( (value: string) => {

      this.firstNameFormControlErrorMessage = "";

      if ((this.firstNameFormControl.touched || this.firstNameFormControl.dirty) && this.firstNameFormControl.errors) {
        this.firstNameFormControlErrorMessage =
        Object.keys(this.firstNameFormControl.errors)
        .map(c => this.firstNameFormControlValidationMessages[c]).join(" ");
      }
    });

    this.myForm.get("favouriteLanguage").valueChanges.subscribe(value => {
      const jsVersionFormControl = this.myForm.get("jsversion");

      if (value === "JS") {
        jsVersionFormControl.setValidators(Validators.required);
      } else {
        jsVersionFormControl.clearValidators();
      }
      jsVersionFormControl.updateValueAndValidity();
    });
  }

}
