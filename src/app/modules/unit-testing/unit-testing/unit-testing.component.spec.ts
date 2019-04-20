import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UnitTestingComponent } from "./unit-testing.component";
import { ReactiveFormsModule, AbstractControl } from "@angular/forms";

describe("UnitTestingComponent", () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;
  let firstNameControl: AbstractControl;
  let lastNameControl: AbstractControl;
  let emailControl: AbstractControl;
  let passwordControl: AbstractControl;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestingComponent ],
      imports: [ReactiveFormsModule]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

    firstNameControl = component.myForm.get("firstName");
    lastNameControl = component.myForm.get("lastName");
    emailControl = component.myForm.get("email");
    passwordControl = component.myForm.get("password");
  });

  afterEach(() => {
    component.myForm.patchValue({
      firstName: null,
      lastName: null,
      email: null,
      password: null
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("should have an invalid form - missing first name", () => {
    lastNameControl.setValue("prodromou");
    emailControl.setValue("prodromouf@gmail.com");
    passwordControl.setValue("mypassword");

    expect(component.myForm.valid).toBe(false);
  });

  fit("should have an invalid form - missing last name", () => {

    firstNameControl.setValue("fanis");
    emailControl.setValue("prodromouf@gmail.com");
    passwordControl.setValue("mypassword");

    expect(component.myForm.valid).toBe(false);
  });

  fit("should have an invalid form - missing email", () => {

    firstNameControl.setValue("fanis");
    lastNameControl.setValue("prodromou");
    passwordControl.setValue("mypassword");

    expect(component.myForm.valid).toBe(false);
  });

  fit("should have an invalid form - missing password", () => {


    firstNameControl.setValue("fanis");
    lastNameControl.setValue("prodromou");
    emailControl.setValue("prodromouf@gmail.com");

    expect(component.myForm.valid).toBe(true);
  });

  fit("should have a valid form", () => {

    firstNameControl.setValue("fanis");
    lastNameControl.setValue("prodromou");
    emailControl.setValue("prodromouf@gmail.com");
    passwordControl.setValue("mypassword");

    expect(component.myForm.valid).toBe(true);
    expect(firstNameControl.valid).toBe(true);
    expect(lastNameControl.valid).toBe(true);
    expect(emailControl.valid).toBe(true);
    expect(passwordControl.valid).toBe(true);
  });
});
