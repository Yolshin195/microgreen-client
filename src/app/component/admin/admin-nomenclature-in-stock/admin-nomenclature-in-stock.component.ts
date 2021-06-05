import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NomenclatureInStock, NomenclatureInStockService } from 'src/app/service/nomenclature-in-stock.service';

@Component({
  selector: 'app-admin-nomenclature-in-stock',
  templateUrl: './admin-nomenclature-in-stock.component.html',
  styleUrls: ['./admin-nomenclature-in-stock.component.css']
})
export class AdminNomenclatureInStockComponent implements OnInit {
  form: FormGroup = this.createForm();
  nomenclatureInStocList: NomenclatureInStock[] = [];

  constructor(private formBuilder: FormBuilder, private service: NomenclatureInStockService) { }

  ngOnInit(): void {
    this.findAll();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      count: [1, Validators.required],
      price: ['', Validators.required],
      nomenclature: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.service.save(this.form.value)
      .subscribe(() => {
        this.form = this.createForm();
        this.findAll();
      });
  }

  findAll() {
    this.service.findAll()
      .subscribe(nomenclatureInStocList => this.nomenclatureInStocList = nomenclatureInStocList);
  }

  onEdit(nomenclatureInStock: NomenclatureInStock): void {
  }

  isEdit(nomenclatureInStock: NomenclatureInStock): boolean {
    return false;
  }

  onDelete(nomenclatureInStock: NomenclatureInStock): void {

  }

}
