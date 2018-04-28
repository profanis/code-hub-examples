import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesDataBindingComponent } from './templates-data-binding.component';

describe('TemplatesDataBindingComponent', () => {
  let component: TemplatesDataBindingComponent;
  let fixture: ComponentFixture<TemplatesDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
