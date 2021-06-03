import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Nomenclature, NomenclatureService } from 'src/app/service/nomenclature.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-select-nomenclature',
  templateUrl: './select-nomenclature.component.html',
  styleUrls: ['./select-nomenclature.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectNomenclatureComponent),
    multi: true
  }]
})
export class SelectNomenclatureComponent implements OnInit, ControlValueAccessor {
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};
  nomenclatureList: Nomenclature[] = [];
  inputValue: string = 'Enter title on nomenclature for serch';

  constructor(private nomenclatureService: NomenclatureService) { }

  ngOnInit(): void {
    this.nomenclatureService.findAllByTitleContaining('')
      .subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList)
  }

  onSelect(nomenclature: Nomenclature) {
    this.inputValue = nomenclature.title;
    this.propagateChange(nomenclature);
    this.propageteTouche(nomenclature);
  }

  onSearch(event: any) {
    let title = event.target.value;
    this.nomenclatureService.findAllByTitleContaining(title)
      .pipe(debounceTime(500))
      .subscribe(nomenclatureList => {
        this.nomenclatureList = nomenclatureList;
      })
  }

  onClick() {
    this.inputValue = '';
  }

  writeValue(nomenclature: Nomenclature): void {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

}
