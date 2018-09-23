import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTypeaheadComponent } from './rxjs-typeahead.component';

describe('RxjsTypeaheadComponent', () => {
  let component: RxjsTypeaheadComponent;
  let fixture: ComponentFixture<RxjsTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
