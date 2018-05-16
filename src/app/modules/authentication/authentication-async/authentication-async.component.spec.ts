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

  it("has the correct message if the user is logged in or not", fakeAsync(() => {
    spyOn(service, "isLoggedInAsync").and.returnValue(Promise.resolve(false));
    component.ngOnInit();

    tick();
    // tick(1000);

    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Is NOT logged in");

  }));

  it("form should be invalid", () => {
    component.buildForm();
    expect(component.myForm.valid).toBeFalsy();
  });

  it("validates the form fields", () => {
    let user: UserModel;

    component.buildForm();

    const firstNameControl = component.myForm.get("firstName");
    const lastNameControl = component.myForm.get("lastName");
    const emailControl = component.myForm.get("email");
    const passwordControl = component.myForm.get("password");

    expect(component.myForm.valid).toBeFalsy();

    firstNameControl.setValue("Fanis");
    expect(firstNameControl.valid).toBeTruthy();

    lastNameControl.setValue("Prodromou");
    expect(lastNameControl.valid).toBeTruthy();

    emailControl.setValue("prodromouf@gmail.com");
    expect(emailControl.valid).toBeTruthy();

    passwordControl.setValue("secretpassword");
    expect(passwordControl.valid).toBeTruthy();


    expect(component.myForm.valid).toBeTruthy();

    component.submit.subscribe((userModel: UserModel) => {
      user = userModel;
    });
    component.submitForm(component.myForm);

    expect(user.firstName).toBe("Fanis");
    expect(user.lastName).toBe("Prodromou");
    expect(user.email).toBe("prodromouf@gmail.com");
    expect(user.password).toBe("secretpassword");

  });

});
