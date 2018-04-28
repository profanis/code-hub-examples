import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionParentComponent } from './component-interaction-parent.component';

describe('ComponentInteractionParentComponent', () => {
  let component: ComponentInteractionParentComponent;
  let fixture: ComponentFixture<ComponentInteractionParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
