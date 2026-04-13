import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuglogListComponent } from './debuglog-list.component';

describe('DebuglogListComponent', () => {
  let component: DebuglogListComponent;
  let fixture: ComponentFixture<DebuglogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebuglogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuglogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
