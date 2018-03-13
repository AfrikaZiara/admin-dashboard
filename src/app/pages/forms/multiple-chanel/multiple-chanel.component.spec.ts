import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChanelComponent } from './multiple-chanel.component';

describe('MultipleChanelComponent', () => {
  let component: MultipleChanelComponent;
  let fixture: ComponentFixture<MultipleChanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
