import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesharingComponent } from './ridesharing.component';

describe('RidesharingComponent', () => {
  let component: RidesharingComponent;
  let fixture: ComponentFixture<RidesharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
