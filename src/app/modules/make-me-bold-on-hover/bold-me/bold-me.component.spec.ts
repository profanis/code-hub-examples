import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldMeComponent } from './bold-me.component';

describe('BoldMeComponent', () => {
  let component: BoldMeComponent;
  let fixture: ComponentFixture<BoldMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoldMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoldMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
