import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartparkingComponent } from './smartparking.component';

describe('SmartparkingComponent', () => {
  let component: SmartparkingComponent;
  let fixture: ComponentFixture<SmartparkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartparkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
