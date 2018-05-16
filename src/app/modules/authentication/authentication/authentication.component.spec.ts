import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationService } from "../authentication.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("AuthenticationComponent", () => {
  let component: AuthenticationComponent;
  let service: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      providers: [AuthenticationService]
    });

    fixture = TestBed.createComponent(AuthenticationComponent);
    service = TestBed.get(AuthenticationService);
    el = fixture.debugElement.query(By.css("div"));
    component = fixture.componentInstance;
  });


  it("returns 'true' when user is logged in", () => {
    spyOn(service, "isLoggedIn").and.returnValue(true);
    expect(component.isLoggedIn()).toBeTruthy();
  });

  it("has the correct message if the user is logged in or not", () => {
    expect(el.nativeElement.textContent.trim()).toBe("");

    spyOn(service, "isLoggedIn").and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Is logged in");
  });

});
