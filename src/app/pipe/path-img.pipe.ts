import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../service/image.service';

@Pipe({
  name: 'pathImg'
})
export class PathImgPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): string {
    console.log(value);
    return `/api/image/${value}`;
  }

}
