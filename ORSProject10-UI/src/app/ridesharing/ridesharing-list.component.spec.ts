import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesharingListComponent } from './ridesharing-list.component';

describe('RidesharingListComponent', () => {
  let component: RidesharingListComponent;
  let fixture: ComponentFixture<RidesharingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesharingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesharingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
