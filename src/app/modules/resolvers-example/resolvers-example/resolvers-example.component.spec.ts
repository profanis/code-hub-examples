import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolversExampleComponent } from './resolvers-example.component';

describe('ResolversExampleComponent', () => {
  let component: ResolversExampleComponent;
  let fixture: ComponentFixture<ResolversExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolversExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolversExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
