import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCiComponent } from './advanced-ci.component';

describe('AdvancedCiComponent', () => {
  let component: AdvancedCiComponent;
  let fixture: ComponentFixture<AdvancedCiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedCiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
