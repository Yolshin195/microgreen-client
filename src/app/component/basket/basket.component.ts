import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Basket, BasketService } from 'src/app/service/basket.service';
import { NomenclatureInStock } from 'src/app/service/nomenclature-in-stock.service';

export interface BasketControl {
  count: FormControl,
  nomenclatureInStock: NomenclatureInStock,
  basket: Basket
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketList: BasketControl[] = [];

  constructor(private formBuilder: FormBuilder, private service: BasketService) { }

  ngOnInit(): void {
    this.findAll();
  }

  createForm(basket: Basket): BasketControl {
    let basketControl: BasketControl = {
      count: new FormControl(basket.count),
      nomenclatureInStock: basket.nomenclatureInStock,
      basket: basket
    };

    //basketControl.count.valueChanges.subscribe(count => {});

    return basketControl;
  }

  findAll(): void {
    this.service.findAll().subscribe(basketList => 
      this.basketList = basketList.map(basket => this.createForm(basket))
    );
  }

  onDelete(basket: Basket): void {
    this.service.delete(basket);
  }

  //получить полную стоимость
  getTotalCost(): number {
    return this.basketList.reduce((sum, basketControl) => 
      sum + (basketControl.count.value * basketControl.nomenclatureInStock.price.price), 0);
  }

}
