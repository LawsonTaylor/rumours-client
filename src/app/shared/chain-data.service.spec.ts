import { TestBed, inject } from '@angular/core/testing';

import { ChainDataService } from './chain-data.service';

describe('ChainDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChainDataService]
    });
  });

  it('should be created', inject([ChainDataService], (service: ChainDataService) => {
    expect(service).toBeTruthy();
  }));
});
