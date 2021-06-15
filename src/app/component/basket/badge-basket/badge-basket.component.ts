import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-badge-basket',
  templateUrl: './badge-basket.component.html',
  styleUrls: ['./badge-basket.component.css']
})
export class BadgeBasketComponent implements OnInit {
  size: number = 0;

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.findAll().subscribe(basketList => this.size = basketList.length);
  }

}
