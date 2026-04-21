import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataretentionComponent } from './dataretention.component';

describe('DataretentionComponent', () => {
  let component: DataretentionComponent;
  let fixture: ComponentFixture<DataretentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataretentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataretentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
