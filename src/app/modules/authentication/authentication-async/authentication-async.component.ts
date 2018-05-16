import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-authentication-async",
  templateUrl: "./authentication-async.component.html",
  styleUrls: ["./authentication-async.component.css"]
})
export class AuthenticationAsyncComponent implements OnInit {

  userisLoggedIn = true;
  myForm: FormGroup;
  @Output() submit = new EventEmitter<any>();

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
      username: new FormControl(),
      password: new FormControl()
    });
  }

  submitForm(form: FormGroup) {
    this.submit.emit({
      username: form.controls["username"].value,
      password: form.controls["password"].value
    });
  }

}
