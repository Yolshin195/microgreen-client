import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNomenclatureInStockComponent } from './admin-nomenclature-in-stock.component';

describe('AdminNomenclatureInStockComponent', () => {
  let component: AdminNomenclatureInStockComponent;
  let fixture: ComponentFixture<AdminNomenclatureInStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNomenclatureInStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNomenclatureInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
