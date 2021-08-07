import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Basket, BasketService } from 'src/app/service/basket.service';
import { Order, OrderRegister, OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  basketList: Basket[] = [];
  form: FormGroup = this.createForm();
  itemsShow:boolean[] = [true, false];

  constructor(public basketService: BasketService, private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basketService.findAll().subscribe(basketList => this.basketList = basketList);
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log("order submit!")
    let order: OrderRegister = {
      products: this.basketService.productList,
      user: this.form.value
    };

    this.orderService.register(order).subscribe(() => console.log("submit!"));
  }

  onShow(index: number): void {
    if (this.itemsShow[index]) {
      this.itemsShow[index] = false;
      this.itemsShow[index + 1] = true;
    }
  }

  getSum(): number {
    if (this.basketService.productList.length > 0) {
      return this.basketService.productList
        .map(basket => basket.count * basket.nomenclatureInStock.price.price)
        .reduce((previous, current) => previous+current,0);
    }

    return 0;
  }

}
