import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ContentComponent),
    multi: true
  }]
})
export class CountComponent implements OnInit, ControlValueAccessor {
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};
  public count: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onPlus() {
    this.count++;
    this.propagateChange(this.count);
    this.propageteTouche(this.count);
  }

  onMinus() {
    this.count--;
    this.propagateChange(this.count);
    this.propageteTouche(this.count);
  }

  onChange(event: any) {
    let count = Number(event.target.value);
    if (!Number.isNaN(count)) {
      this.count = count;
      this.propagateChange(this.count);
      this.propageteTouche(this.count);
    } else {
      event.target.value = this.count;
    }
  }

  writeValue(count: number): void {
    this.count = count;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

}
