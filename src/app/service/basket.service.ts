import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NomenclatureInStock } from './nomenclature-in-stock.service';

export interface Basket {
  nomenclatureInStock: NomenclatureInStock,
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private list: Basket[] = [];

  constructor() { }

  findAll(): Observable<Basket[]> {
    return of(this.list);
  }

  size(): Observable<number> {
    return of(this.list.length);
  }

  add(nomenclatureInStock: NomenclatureInStock) {
    if (this.list.find(basket => basket.nomenclatureInStock.id === nomenclatureInStock.id)) return;

    this.list.push({
      nomenclatureInStock,
      count: 1
    })
  }
}
