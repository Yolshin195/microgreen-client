import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { NomenclatureInStock } from './nomenclature-in-stock.service';
import { User } from './user.service';
import { OrderStatus } from './order-status.service';
import { HttpClient } from '@angular/common/http';
import { Basket } from './basket.service';

export interface Product {
  id?: number,
  count: number,
  price?: number,
  nomenclatureInStock: NomenclatureInStock
}

export interface Order extends OrderRegister {
  id: number,
  create: Date,
  end: Date,
  status: OrderStatus,
  user: User,
  products: Product[]
}

export interface OrderRegister {
  user: User,
  products: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private path: string = '/api/order';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.path);
  }

  save() {

  }

  register(order: OrderRegister): Observable<any> {
    return this.http.post(`${this.path}/register`, order);
  }

  BasketToProductMaper(basket: Basket): Product {
    return { 
      nomenclatureInStock: basket.nomenclatureInStock,
      count: basket.count
    }
  }
}
