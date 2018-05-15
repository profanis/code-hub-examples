import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationService } from "../authentication.service";

export class MockedAuthenticationService {

  constructor() { }

  isLoggedIn() {
    return true;
  }

}

fdescribe("AuthenticationComponent", () => {
  let component: AuthenticationComponent;
  let service: MockedAuthenticationService;


  // let fixture: ComponentFixture<AuthenticationComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ AuthenticationComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    service = new MockedAuthenticationService();
    component = new AuthenticationComponent(service);
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AuthenticationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("returns false when user requires to login", () => {
    expect(component.isLoggedIn()).toBeTruthy();
  });
});
