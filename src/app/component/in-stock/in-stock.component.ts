import { Component, OnInit } from '@angular/core';
import { NomenclatureInStock, NomenclatureInStockService } from 'src/app/service/nomenclature-in-stock.service';

@Component({
  selector: 'app-in-stock',
  templateUrl: './in-stock.component.html',
  styleUrls: ['./in-stock.component.css']
})
export class InStockComponent implements OnInit {
  nomenclatureInStocList: NomenclatureInStock[] = [];

  constructor(private service:NomenclatureInStockService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll()
      .subscribe(nomenclatureInStocList => this.nomenclatureInStocList = nomenclatureInStocList);
  }
}
