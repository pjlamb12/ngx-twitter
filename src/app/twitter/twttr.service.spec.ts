import { TestBed, inject } from '@angular/core/testing';

import { TwttrService } from './twttr.service';

describe('TwttrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwttrService]
    });
  });

  it('should be created', inject([TwttrService], (service: TwttrService) => {
    expect(service).toBeTruthy();
  }));
});
