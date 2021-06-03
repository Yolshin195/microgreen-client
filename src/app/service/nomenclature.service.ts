import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './image.service';

export interface Nomenclature {
  id: number,
  title: string,
  description: string,
  image: Image
}

@Injectable({
  providedIn: 'root'
})
export class NomenclatureService {
  private path: string = '/api/nomenclature';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Nomenclature[]>  {
    return this.http.get<Nomenclature[]>(this.path);
  }

  save(nomenclature: Nomenclature): Observable<any> {
    return this.http.post(this.path, nomenclature);
  }
}
