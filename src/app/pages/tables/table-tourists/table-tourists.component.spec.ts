import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTouristsComponent } from './table-tourists.component';

describe('TableTouristsComponent', () => {
  let component: TableTouristsComponent;
  let fixture: ComponentFixture<TableTouristsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTouristsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTouristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
