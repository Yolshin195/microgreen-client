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
  private resurceSource = new BehaviorSubject<Basket[]>([]);
  resurce = this.resurceSource.asObservable();

  constructor() {
    let basketList = localStorage.getItem("basketList");
    if (basketList) {
      this.resurceSource.next(JSON.parse(basketList));
    } 
  }

  findAll(): Observable<Basket[]> {
    return this.resurce;
  }

  add(nomenclatureInStock: NomenclatureInStock) {
    if (this.resurceSource.value.find(basket => basket.nomenclatureInStock.id === nomenclatureInStock.id)) return;

    this.resurceSource.next([
      {nomenclatureInStock, count: 1},
       ...this.resurceSource.getValue()
    ]);
  }

  delete(basket: Basket): void {
    this.resurceSource.next(this.resurceSource.getValue().filter(item => item !== basket));
  }

}
