import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTourOperatorsComponent } from './table-tour-operators.component';

describe('TableTourOperatorsComponent', () => {
  let component: TableTourOperatorsComponent;
  let fixture: ComponentFixture<TableTourOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTourOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTourOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
