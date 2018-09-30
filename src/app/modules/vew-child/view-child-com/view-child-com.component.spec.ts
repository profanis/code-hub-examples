import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildComComponent } from './view-child-com.component';

describe('ViewChildComComponent', () => {
  let component: ViewChildComComponent;
  let fixture: ComponentFixture<ViewChildComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
