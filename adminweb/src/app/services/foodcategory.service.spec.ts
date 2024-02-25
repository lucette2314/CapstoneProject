import { TestBed } from '@angular/core/testing';

import { FoodcategoryService } from './foodcategory.service';

describe('FoodcategoryService', () => {
  let service: FoodcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
