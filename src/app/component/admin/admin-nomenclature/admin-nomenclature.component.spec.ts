import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNomenclatureComponent } from './admin-nomenclature.component';

describe('AdminNomenclatureComponent', () => {
  let component: AdminNomenclatureComponent;
  let fixture: ComponentFixture<AdminNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
