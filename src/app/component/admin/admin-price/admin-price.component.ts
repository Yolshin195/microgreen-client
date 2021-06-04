import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Price, PriceService } from 'src/app/service/price.service';

@Component({
  selector: 'app-admin-price',
  templateUrl: './admin-price.component.html',
  styleUrls: ['./admin-price.component.css']
})
export class AdminPriceComponent implements OnInit {
  priceList: Price[] = [];
  form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder, private priceService: PriceService) { }

  ngOnInit(): void {
    this.findAll();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      nomenclature: [null, Validators.required],
      price: ['0', Validators.required]
    })
  }

  findAll(): void {
    this.priceService.findAll()
      .subscribe(priceList => this.priceList = priceList)
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.priceService.save(this.form.value)
      .subscribe(() => {
        this.form = this.createForm();
        this.findAll();
      });
  }
}
