import { TestBed, inject } from '@angular/core/testing';

import { AdminTourPackagesService } from './admin-tour-packages.service';

describe('AdminTourPackagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTourPackagesService]
    });
  });

  it('should be created', inject([AdminTourPackagesService], (service: AdminTourPackagesService) => {
    expect(service).toBeTruthy();
  }));
});
