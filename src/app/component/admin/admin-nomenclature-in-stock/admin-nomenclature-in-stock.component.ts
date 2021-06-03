import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NomenclatureInStockService } from 'src/app/service/nomenclature-in-stock.service';

@Component({
  selector: 'app-admin-nomenclature-in-stock',
  templateUrl: './admin-nomenclature-in-stock.component.html',
  styleUrls: ['./admin-nomenclature-in-stock.component.css']
})
export class AdminNomenclatureInStockComponent implements OnInit {
  form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder, private service: NomenclatureInStockService) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      count: [1, Validators.required],
      price: ['', Validators.required],
      nomenclature: ['', Validators.required]
    });
  }

  onSubmit(): void {

  }

}
