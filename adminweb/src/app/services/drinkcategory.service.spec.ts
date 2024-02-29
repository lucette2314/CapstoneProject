import { TestBed } from '@angular/core/testing';

import { DrinkcategoryService } from './drinkcategory.service';

describe('DrinkcategoryService', () => {
  let service: DrinkcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
