import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { NomenclatureInStock, NomenclatureInStockService } from 'src/app/service/nomenclature-in-stock.service';

@Component({
  selector: 'app-in-stock',
  templateUrl: './in-stock.component.html',
  styleUrls: ['./in-stock.component.css']
})
export class InStockComponent implements OnInit {
  nomenclatureInStocList: NomenclatureInStock[] = [];

  constructor(private service:NomenclatureInStockService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll()
      .subscribe(nomenclatureInStocList => this.nomenclatureInStocList = nomenclatureInStocList);
  }

  onAddBasket(nomenclature: NomenclatureInStock): void {
    this.basketService.add(nomenclature);
  }
}
