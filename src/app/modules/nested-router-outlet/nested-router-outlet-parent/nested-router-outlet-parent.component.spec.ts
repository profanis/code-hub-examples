import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRouterOutletParentComponent } from './nested-router-outlet-parent.component';

describe('NestedRouterOutletParentComponent', () => {
  let component: NestedRouterOutletParentComponent;
  let fixture: ComponentFixture<NestedRouterOutletParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedRouterOutletParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRouterOutletParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
