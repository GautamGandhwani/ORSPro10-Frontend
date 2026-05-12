import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartparkingListComponent } from './smartparking-list.component';

describe('SmartparkingListComponent', () => {
  let component: SmartparkingListComponent;
  let fixture: ComponentFixture<SmartparkingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartparkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartparkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
