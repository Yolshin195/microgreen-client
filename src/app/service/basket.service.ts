import { Injectable} from '@angular/core';
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

  constructor() {
    let basketList = localStorage.getItem("basketList");
    if (basketList) {
      this.list = JSON.parse(basketList);
    } 
  }

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

    localStorage.setItem("basketList", JSON.stringify(this.list));
  }

  delete(basket: Basket): void {
    let index = this.list.indexOf(basket);
    if (index !== -1) {
      this.list.splice(index, 1);
      localStorage.setItem("basketList", JSON.stringify(this.list));
    }
  }

}
