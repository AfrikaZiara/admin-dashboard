import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTourBookingsComponent } from './table-tour-bookings.component';

describe('TableTourBookingsComponent', () => {
  let component: TableTourBookingsComponent;
  let fixture: ComponentFixture<TableTourBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTourBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTourBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
