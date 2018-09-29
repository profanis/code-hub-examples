import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRouterOutletChildComponent } from './nested-router-outlet-child.component';

describe('NestedRouterOutletChildComponent', () => {
  let component: NestedRouterOutletChildComponent;
  let fixture: ComponentFixture<NestedRouterOutletChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedRouterOutletChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRouterOutletChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
