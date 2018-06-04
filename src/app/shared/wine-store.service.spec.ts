import { TestBed, inject } from '@angular/core/testing';

import { WineStoreService } from './wine-store.service';

describe('WineStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineStoreService]
    });
  });

  it('should be created', inject([WineStoreService], (service: WineStoreService) => {
    expect(service).toBeTruthy();
  }));
});
