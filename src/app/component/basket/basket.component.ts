import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Basket, BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketList: Basket[] = [];
  form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder, private service: BasketService) { }

  ngOnInit(): void {
    this.findAll();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      count: [1]
    })
  }

  findAll() {
    this.service.findAll().subscribe(basketList => this.basketList = basketList);
  }

}
