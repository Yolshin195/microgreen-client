import { Component, forwardRef, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CountComponent),
    multi: true
  }]
})
export class CountComponent implements OnInit, ControlValueAccessor {
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};
  //public count: number = 1;

  @Input() min: number = 1;
  @Input() max: number = 999;
  @Input() count: number = 1; 
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPlus() {
    if (this.count >= this.max) return;
  
    this.count++;
    this.propagateChange(this.count);
    //this.propageteTouche(this.count);
    this.change.emit(this.count);
  }

  onMinus() {
    if (this.count <= this.min) return;

    this.count--;
    this.propagateChange(this.count);
    //this.propageteTouche(this.count);
    this.change.emit(this.count);
  }

  onChange(event: any) {
    let count = Number(event.target.value);
    if (!Number.isNaN(count)) {
      if (count > this.max) {
        count = this.max;
        event.target.value = count;
      }
      this.count = count;
      this.propagateChange(this.count);
      //this.propageteTouche(this.count);
      this.change.emit(this.count);
    } else {
      event.target.value = this.count;
    }
  }

  writeValue(count: number): void {
    count = Number(count);
    this.count = count | 1;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

}
