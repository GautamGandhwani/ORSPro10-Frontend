import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApikeyListComponent } from './apikey-list.component';

describe('ApikeyListComponent', () => {
  let component: ApikeyListComponent;
  let fixture: ComponentFixture<ApikeyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApikeyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApikeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
