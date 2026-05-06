import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersessionListComponent } from './usersession-list.component';

describe('UsersessionListComponent', () => {
  let component: UsersessionListComponent;
  let fixture: ComponentFixture<UsersessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
