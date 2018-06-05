import { TestBed, inject } from '@angular/core/testing';

import { CategoryStoreService } from './category-store.service';

describe('CategoryStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryStoreService]
    });
  });

  it('should be created', inject([CategoryStoreService], (service: CategoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
