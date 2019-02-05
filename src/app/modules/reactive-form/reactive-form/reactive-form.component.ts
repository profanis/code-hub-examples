import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Customer } from "../../basic-form/basic-form/cusomer.model";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  myForm: FormGroup;
  customer = new Customer();
  programmingLanguages = ["TS", "JS", "C#"];
  firstNameFormControlSubscription: Subscription;
  favouriteLanguageSubscription: Subscription;

  constructor(private router: Router) {
    // this.router.navigate(["/basic-form"], { queryParams: { key: "value"} });
   }

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
      favouriteLanguage: new FormControl(this.programmingLanguages[1], Validators.required),
      jsversion: new FormControl()
    });

    this.firstNameFormControlSubscription = this.firstNameFormControl.valueChanges.subscribe( (value: string) => {
      console.log(value);

      this.firstNameFormControlErrorMessage = "";

      if ((this.firstNameFormControl.touched || this.firstNameFormControl.dirty) && this.firstNameFormControl.errors) {
        this.firstNameFormControlErrorMessage =
        Object.keys(this.firstNameFormControl.errors)
        .map(c => this.firstNameFormControlValidationMessages[c]).join(" ");
      }
    });

    this.favouriteLanguageSubscription = this.myForm.get("favouriteLanguage").valueChanges.subscribe(value => {
      const jsVersionFormControl = this.myForm.get("jsversion");

      if (value === "JS") {
        jsVersionFormControl.setValidators(Validators.required);
      } else {
        jsVersionFormControl.clearValidators();
      }
      jsVersionFormControl.updateValueAndValidity();
    });


  }


  submit({value}: {value}) {
    console.log(value);
  }

  ngOnDestroy(): void {
    if (this.favouriteLanguageSubscription) {
      this.favouriteLanguageSubscription.unsubscribe();
    }

    if (this.firstNameFormControlSubscription) {
      this.firstNameFormControlSubscription.unsubscribe();
    }
  }

}
