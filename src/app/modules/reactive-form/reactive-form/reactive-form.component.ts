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

  constructor() { }

  firstNameFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  firstNameFormControlErrorMessage = "";

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: this.firstNameFormControl,
      lastName: new FormControl("", Validators.required)
    });

    this.firstNameFormControl.valueChanges.subscribe( (value: string) => {

      if ((this.firstNameFormControl.touched || this.firstNameFormControl.dirty) && this.firstNameFormControl.errors) {
        this.firstNameFormControlErrorMessage = "error";
      }
    });
  }

}
