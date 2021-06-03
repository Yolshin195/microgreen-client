import { TestBed } from '@angular/core/testing';

import { NomenclatureInStockService } from './nomenclature-in-stock.service';

describe('NomenclatureInStockService', () => {
  let service: NomenclatureInStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomenclatureInStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
