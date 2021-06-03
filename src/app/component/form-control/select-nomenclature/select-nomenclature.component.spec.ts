import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNomenclatureComponent } from './select-nomenclature.component';

describe('SelectNomenclatureComponent', () => {
  let component: SelectNomenclatureComponent;
  let fixture: ComponentFixture<SelectNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
