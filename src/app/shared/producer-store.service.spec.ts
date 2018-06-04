import { TestBed, inject } from '@angular/core/testing';

import { ProducerStoreService } from './producer-store.service';

describe('ProducerStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducerStoreService]
    });
  });

  it('should be created', inject([ProducerStoreService], (service: ProducerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
