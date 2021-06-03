import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Image, ImageService } from 'src/app/service/image.service';
import { Nomenclature } from 'src/app/service/nomenclature.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UploadImageComponent),
    multi: true
  }]
})
export class UploadImageComponent implements OnInit, ControlValueAccessor {
  path: string = '/api/img/plus.svg';
  propagateChange: Function = () => {};
  propageteTouche: Function = () => {};

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  writeValue(image: Image): void {
    if (image) {
      this.path = `/api/image/${image.fileName}`;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propageteTouche = fn;
  }

  onFileSelected(event: any) {
    const selectedFile: File = <File>event.target.files[0];
    this.imageService.save(selectedFile).subscribe(image => {
      this.path = `/api/image/${image.fileName}`
      this.propagateChange(image);
      this.registerOnTouched(image);
    });
  }

}
