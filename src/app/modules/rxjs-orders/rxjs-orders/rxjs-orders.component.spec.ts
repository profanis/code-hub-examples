import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOrdersComponent } from './rxjs-orders.component';

describe('RxjsOrdersComponent', () => {
  let component: RxjsOrdersComponent;
  let fixture: ComponentFixture<RxjsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
