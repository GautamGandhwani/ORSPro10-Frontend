import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationruleListComponent } from './notificationrule-list.component';

describe('NotificationruleListComponent', () => {
  let component: NotificationruleListComponent;
  let fixture: ComponentFixture<NotificationruleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationruleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationruleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
