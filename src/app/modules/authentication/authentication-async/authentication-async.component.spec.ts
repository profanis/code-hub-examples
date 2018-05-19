import "rxjs/add/observable/of";

import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";

import { AuthenticationService } from "../authentication.service";
import { AuthenticationAsyncComponent } from "./authentication-async.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserModel } from "./user.model";

export class MockAuthenticationService extends AuthenticationService {

  isLoggedInAsync(): Promise<boolean> {
    return Promise.resolve(true);
  }

}

fdescribe("AuthenticationAsyncComponent", () => {
  let component: AuthenticationAsyncComponent;
  let service: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationAsyncComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationAsyncComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
      ]
    });

    fixture = TestBed.createComponent(AuthenticationAsyncComponent);
    service = TestBed.get(AuthenticationService);
    el = fixture.debugElement.query(By.css("div"));
    component = fixture.componentInstance;

  });



  it("form should be invalid", () => {
    component.buildForm();
    expect(component.myForm.valid).toBeFalsy();
  });

  it("validates the form fields", () => {


  });

});
