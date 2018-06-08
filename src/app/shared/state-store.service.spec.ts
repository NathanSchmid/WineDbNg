import { TestBed, inject } from '@angular/core/testing';

import { StateStoreService } from './state-store.service';

describe('StateStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateStoreService]
    });
  });

  it('should be created', inject([StateStoreService], (service: StateStoreService) => {
    expect(service).toBeTruthy();
  }));
});
