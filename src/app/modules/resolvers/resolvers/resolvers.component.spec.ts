import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolversComponent } from './resolvers.component';

describe('ResolversComponent', () => {
  let component: ResolversComponent;
  let fixture: ComponentFixture<ResolversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
