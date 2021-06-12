import { Component, OnInit } from '@angular/core';
import { Basket, BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  basketList: Basket[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.findAll().subscribe(basketList => this.basketList = basketList);
  }

}
