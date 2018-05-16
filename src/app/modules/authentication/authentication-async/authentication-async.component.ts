import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "./user.model";

@Component({
  selector: "app-authentication-async",
  templateUrl: "./authentication-async.component.html",
  styleUrls: ["./authentication-async.component.css"]
})
export class AuthenticationAsyncComponent implements OnInit {

  userisLoggedIn = true;
  myForm: FormGroup;
  @Output() submit = new EventEmitter<UserModel>();
  emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.isLoggedInAsync()
    .then(data => {
      this.userisLoggedIn = data;
    });
    this.buildForm();
  }

  buildForm() {
    this.myForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl("", [Validators.required, Validators.minLength(3), Validators.minLength(10)])
    });
  }

  submitForm(form: FormGroup) {
    this.submit.emit({
      firstName: form.controls["firstName"].value,
      lastName: form.controls["lastName"].value,
      email: form.controls["email"].value,
      password: form.controls["password"].value
    });
  }

}
