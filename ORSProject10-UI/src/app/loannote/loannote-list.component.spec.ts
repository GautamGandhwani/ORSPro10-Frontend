import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoannoteListComponent } from './loannote-list.component';

describe('LoannoteListComponent', () => {
  let component: LoannoteListComponent;
  let fixture: ComponentFixture<LoannoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoannoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoannoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
