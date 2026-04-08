import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoannoteComponent } from './loannote.component';

describe('LoannoteComponent', () => {
  let component: LoannoteComponent;
  let fixture: ComponentFixture<LoannoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoannoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoannoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
