import { Component, OnInit } from '@angular/core';
import { Order, OrderService, Product } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  orderList: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAll().subscribe(orderList => this.orderList = orderList);
  }

    //получить полную стоимость
    getTotalCost(productList: Product[]): number {
      return productList.reduce((acc, basketControl) => 
        acc + (basketControl.count * basketControl.nomenclatureInStock.price.price), 0);
    }

}
