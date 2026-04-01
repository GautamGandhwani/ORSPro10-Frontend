import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilogListComponent } from './apilog-list.component';

describe('ApilogListComponent', () => {
  let component: ApilogListComponent;
  let fixture: ComponentFixture<ApilogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApilogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
