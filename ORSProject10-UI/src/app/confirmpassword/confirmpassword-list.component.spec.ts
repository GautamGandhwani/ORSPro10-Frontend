import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmpasswordListComponent } from './confirmpassword-list.component';

describe('ConfirmpasswordListComponent', () => {
  let component: ConfirmpasswordListComponent;
  let fixture: ComponentFixture<ConfirmpasswordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmpasswordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmpasswordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
