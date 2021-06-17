import { Component, createPlatform, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Basket, BasketService } from 'src/app/service/basket.service';
import { NomenclatureInStock } from 'src/app/service/nomenclature-in-stock.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  form:FormGroup = this.createForm([]);

  constructor(private formBuilder: FormBuilder, public service: BasketService) { }

  ngOnInit(): void {
    this.findAll();
    this.form.valueChanges.subscribe(formValue => {
      console.log(formValue);
    });
  }

  createProductArrayForm(productList: Basket[]): FormArray {
    return new FormArray(productList.map(product => this.createProductForm(product)))
  }

  createProductForm(product:Basket): FormControl {
    return new FormControl(product);
  }

  createForm(productList: Basket[]): FormGroup  {
    return this.formBuilder.group({
      products: this.createProductArrayForm(productList)
    })
  }

  findAll(): void {
  }

  onDelete(basket: Basket): void {
    console.log("!!", basket);
    this.service.delete(basket);
  }

  //получить полную стоимость
  getTotalCost(): number {
    return this.service.productList.reduce((sum, basketControl) => 
      sum + (basketControl.count * basketControl.nomenclatureInStock.price.price), 0);
  }

  getProductControls(): FormArray {
    return (<FormArray>this.form.controls.products)
  }

}
