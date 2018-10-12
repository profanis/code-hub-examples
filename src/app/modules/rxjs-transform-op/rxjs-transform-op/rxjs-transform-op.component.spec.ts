import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTransformOpComponent } from './rxjs-transform-op.component';

describe('RxjsTransformOpComponent', () => {
  let component: RxjsTransformOpComponent;
  let fixture: ComponentFixture<RxjsTransformOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTransformOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTransformOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
