import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataretentionListComponent } from './dataretention-list.component';

describe('DataretentionListComponent', () => {
  let component: DataretentionListComponent;
  let fixture: ComponentFixture<DataretentionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataretentionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataretentionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
