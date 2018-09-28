import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDirectivesSwitchComponent } from './built-in-directives-switch.component';

describe('BuiltInDirectivesSwitchComponent', () => {
  let component: BuiltInDirectivesSwitchComponent;
  let fixture: ComponentFixture<BuiltInDirectivesSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInDirectivesSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInDirectivesSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
