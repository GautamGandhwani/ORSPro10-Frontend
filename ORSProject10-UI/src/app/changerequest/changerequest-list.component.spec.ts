import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerequestListComponent } from './changerequest-list.component';

describe('ChangerequestListComponent', () => {
  let component: ChangerequestListComponent;
  let fixture: ComponentFixture<ChangerequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
