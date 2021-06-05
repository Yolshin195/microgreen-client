import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Nomenclature } from 'src/app/service/nomenclature.service';
import { Price, PriceService } from 'src/app/service/price.service';

@Component({
  selector: 'app-select-price',
  templateUrl: './select-price.component.html',
  styleUrls: ['./select-price.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectPriceComponent),
    multi: true
  }]
})
export class SelectPriceComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() nomenclature?: Nomenclature;
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};
  priceList: Price[] = [];
  currentPrice?: Price;
  devaultInputValue: string = 'Enter title on price for serch';
  inputValue: string = this.devaultInputValue;
  isShowList: boolean = false;

  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    console.log("select-price ngOnInit: ", this.nomenclature, this.isNull(this.nomenclature));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SelectPrice ngOnChages: ', changes, this.isNull(this.nomenclature));
    this.getCurrentPrice();
  }

  onSelect(price: Price) {
    this.inputValue = this.getTitle(price);
    this.propagateChange(price);
    this.propageteTouche(price);
    this.onShowList(false);
  }

  onSearch(event: any) {
    let title = event.target.value;
    this.priceService.findAll()
      .pipe(debounceTime(500))
      .subscribe(priceList => {
        this.priceList = priceList;
      })
  }

  getCurrentPrice() {
    if (this.nomenclature) {
      this.priceService.findCurrent(this.nomenclature).subscribe(price => {
        if (price) {
          this.currentPrice = price;
          this.inputValue = this.getTitle(price);
          this.propagateChange(price);
          this.propageteTouche(price);
        } else {
          this.inputValue = this.devaultInputValue;
          this.currentPrice = undefined;
          this.propagateChange(null);
          this.propageteTouche(null);
        }
      });
    }
  }

  onClick() {
    this.inputValue = '';
    this.onShowList(true);
  }

  onToggle() {
    if (!this.isShowList && this.nomenclature) {
      this.inputValue = 'Loading...';
      this.priceService.findAllByNomenclature(this.nomenclature).subscribe(priceList => {
        this.priceList = priceList;
        this.inputValue = '';
        this.onShowList(true);
      })
    }
    else {
      this.onShowList(!this.isShowList);
    }
  }

  onShowList(flag: boolean): void {
    this.isShowList = flag;
  }

  onFocusout() {
    this.onShowList(false);
    if (this.currentPrice) {
      this.inputValue = this.getTitle(this.currentPrice);
    } else {
      this.inputValue = this.devaultInputValue;
    }
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
    return `${price.price}-${price.create}`;
  }

  isNull(obj: any) {
    return !!obj;
  }

}
