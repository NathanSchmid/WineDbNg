import { TestBed, inject } from '@angular/core/testing';

import { BlendStoreService } from './blend-store.service';

describe('BlendStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlendStoreService]
    });
  });

  it('should be created', inject([BlendStoreService], (service: BlendStoreService) => {
    expect(service).toBeTruthy();
  }));
});
