import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nomenclature } from './nomenclature.service';

export interface Price {
  id: number,
  price: number,
  create: Date,
  nomenclature: Nomenclature
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private path: string = '/api/price';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Price[]>  {
    return this.http.get<Price[]>(this.path);
  }

  save(price: Price): Observable<any> {
    console.log(price);
    return this.http.post(this.path, price);
  }
}
