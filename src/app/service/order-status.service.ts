import { Injectable } from '@angular/core';

export interface OrderStatus {
  id: number,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  constructor() { }
}
