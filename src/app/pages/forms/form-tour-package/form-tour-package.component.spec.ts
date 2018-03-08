import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTourPackageComponent } from './form-tour-package.component';

describe('FormTourPackageComponent', () => {
  let component: FormTourPackageComponent;
  let fixture: ComponentFixture<FormTourPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTourPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTourPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
