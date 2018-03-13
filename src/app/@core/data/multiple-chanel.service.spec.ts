import { TestBed, inject } from '@angular/core/testing';

import { MultipleChanelService } from './multiple-chanel.service';

describe('MultipleChanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultipleChanelService]
    });
  });

  it('should be created', inject([MultipleChanelService], (service: MultipleChanelService) => {
    expect(service).toBeTruthy();
  }));
});
