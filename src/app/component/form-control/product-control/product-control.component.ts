import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Basket } from 'src/app/service/basket.service';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ProductControlComponent),
    multi: true
  }]
})
export class ProductControlComponent implements OnInit, ControlValueAccessor {
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};
  countControll: FormControl = this.createCountControll();
  product?: Basket;

  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  subscibeValueChanges(): void {
    this.countControll.valueChanges.subscribe(count => {
      if (this.product) {
        this.product.count = count;
        this.propagateChange(this.product);
      }
    })
  }

  writeValue(product: Basket): void {
    console.log('ProductControl writeValue: ', product);
    this.countControll = this.createCountControll(product.count);
    this.product = product;
    this.subscibeValueChanges();
  }

  createCountControll(count?: number): FormControl {
    return new FormControl(count || 0);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

  getMaxCount(): number {
    if (this.product) {
      return this.product.nomenclatureInStock.available;
    }

    return 999;
  }
}
