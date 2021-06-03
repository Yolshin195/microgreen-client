import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Image {
  id: number,
  fileName: string,
  originFileName: string
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private path: string = '/api/image';

  constructor(private http: HttpClient) { }

  save(image: File): Observable<Image> {
    const fd = new FormData();
    fd.append('image', image, image.name);

    return this.http.post<Image>(this.path, fd);
  }
}
