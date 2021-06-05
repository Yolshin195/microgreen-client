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
  currentNomenclature?: Nomenclature;
  devaultInputValue: string = 'Enter title on nomenclature for serch';
  inputValue: string = this.devaultInputValue;
  isShowList: boolean = false;

  constructor(private nomenclatureService: NomenclatureService) { }

  ngOnInit(): void {
    this.nomenclatureService.findAllByTitleContaining('')
      .subscribe(nomenclatureList => this.nomenclatureList = nomenclatureList)
  }

  onSelect(nomenclature: Nomenclature) {
    this.inputValue = nomenclature.title;
    this.currentNomenclature = nomenclature;
    this.propagateChange(nomenclature);
    this.propageteTouche(nomenclature);
    this.onShowList(false);
  }

  onSearch(event: any) {
    let title = event.target.value;
    this.nomenclatureService.findAllByTitleContaining(title)
      .pipe(debounceTime(500))
      .subscribe(nomenclatureList => {
        this.nomenclatureList = nomenclatureList;
      })
  }

  onBeginSearch() {
    this.inputValue = '';
    this.onShowList(true);
  }

  onToggle() {
    this.onShowList(!this.isShowList);
  }

  onShowList(flag: boolean): void {
    this.isShowList = flag;
  }

  onFocusout() {
    this.onShowList(false);
    if (this.currentNomenclature) {
      this.inputValue = this.currentNomenclature.title
    } else {
      this.inputValue = this.devaultInputValue;
    }
  }

  writeValue(nomenclature: Nomenclature): void {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

  isNull(obj: any) {
    return !!obj;
  }

}
