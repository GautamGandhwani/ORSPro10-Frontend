import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationruleComponent } from './notificationrule.component';

describe('NotificationruleComponent', () => {
  let component: NotificationruleComponent;
  let fixture: ComponentFixture<NotificationruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
