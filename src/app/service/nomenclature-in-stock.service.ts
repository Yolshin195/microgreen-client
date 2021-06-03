import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from './price.service';
import { Nomenclature } from './nomenclature.service';

export interface NomenclatureInStock {
  id: number,
  count: number,
  available: number,
  create: Date,
  price: Price,
  nomenclature: Nomenclature
}

@Injectable({
  providedIn: 'root'
})
export class NomenclatureInStockService {
  private path: string = '/api/nomenclature-in-stock';

  constructor(private http: HttpClient) { }

  findAll(): Observable<NomenclatureInStock[]>  {
    return this.http.get<NomenclatureInStock[]>(this.path);
  }

  save(nomenclature: NomenclatureInStock): Observable<any> {
    return this.http.post(this.path, nomenclature);
  }
}
