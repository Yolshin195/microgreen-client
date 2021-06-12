import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { NomenclatureInStock } from './nomenclature-in-stock.service';
import { User } from './user.service';
import { OrderStatus } from './order-status.service';

export interface Product {
  id: number,
  count: number,
  price: number,
  nomenclatureInStock: NomenclatureInStock
}

export interface Order {
  id: number,
  create: Date,
  end: Date,
  status: OrderStatus,
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private path: string = '/api/order';

  constructor() { }

  findAll() {

  }

  save() {

  }
}
