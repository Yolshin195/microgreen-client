import { Component, Input, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Nomenclature } from 'src/app/service/nomenclature.service';
import { Price, PriceService } from 'src/app/service/price.service';

@Component({
  selector: 'app-select-price',
  templateUrl: './select-price.component.html',
  styleUrls: ['./select-price.component.css']
})
export class SelectPriceComponent implements OnInit {
  @Input() nomenclature?: Nomenclature;
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};
  priceList: Price[] = [];
  inputValue: string = 'Enter title on nomenclature for serch';

  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
  }

  onSelect(price: Price) {
    this.inputValue = this.getTitle(price);
    this.propagateChange(price);
    this.propageteTouche(price);
  }

  onSearch(event: any) {
    let title = event.target.value;
    this.priceService.findAll()
      .pipe(debounceTime(500))
      .subscribe(priceList => {
        this.priceList = priceList;
      })
  }

  onClick() {
    this.inputValue = '';
  }

  writeValue(price: Price): void {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

  getTitle(price: Price) {
    return `${price.nomenclature.title}-${price.price}`;
  }

}
