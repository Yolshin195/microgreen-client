import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { Observable, of, BehaviorSubject  } from 'rxjs';
import { NomenclatureInStock } from './nomenclature-in-stock.service';

export interface Basket {
  nomenclatureInStock: NomenclatureInStock,
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public productList: Basket[] = [];

  constructor() {
    let basketList = localStorage.getItem("basketList");
    if (basketList) {
      this.productList = JSON.parse(basketList);
    }
  }

  setLocalStorage(productList: Basket[]): void {
    localStorage.setItem("basketList", JSON.stringify(productList))
  }

  findAll(): Observable<Basket[]> {
    return of(this.productList);
  }

  add(nomenclatureInStock: NomenclatureInStock) {
    if (this.productList.find(basket => basket.nomenclatureInStock.id === nomenclatureInStock.id)) return;

    this.productList.push({nomenclatureInStock, count: 1});
    this.setLocalStorage(this.productList);
  }

  setCount(product: Basket, count: number): void {
    let index = this.productList.indexOf(product);
    if (index !== -1) {
      this.productList[index].count = count;
      this.setLocalStorage(this.productList);
    }
  }

  delete(basket: Basket): void {
    this.productList = this.productList.filter(product => product !== basket);
    this.setLocalStorage(this.productList);
  }

}
