import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTourPackagesComponent } from './table-tour-packages.component';

describe('TableTourPackagesComponent', () => {
  let component: TableTourPackagesComponent;
  let fixture: ComponentFixture<TableTourPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTourPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTourPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
