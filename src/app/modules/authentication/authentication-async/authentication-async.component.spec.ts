import "rxjs/add/observable/of";

import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";

import { AuthenticationService } from "../authentication.service";
import { AuthenticationAsyncComponent } from "./authentication-async.component";
import { ReactiveFormsModule } from "@angular/forms";


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

  let usernameEl: DebugElement;
  let passwordEl: DebugElement;
  let submitEl: DebugElement;


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

    submitEl = fixture.debugElement.query(By.css("button"));
    usernameEl = fixture.debugElement.query(By.css("#username"));
    passwordEl = fixture.debugElement.query(By.css("#password"));
  });

  it("has the correct message if the user is logged in or not", fakeAsync(() => {
    spyOn(service, "isLoggedInAsync").and.returnValue(Promise.resolve(false));
    component.ngOnInit();

    tick();
    // tick(1000);

    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Is NOT logged in");

  }));


  it("has the correct message if the user is logged in or not", fakeAsync(() => {
    spyOn(service, "isLoggedInAsync").and.returnValue(Promise.resolve(false));
    component.ngOnInit();

    tick();
    // tick(1000);

    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Is NOT logged in");

  }));

});
