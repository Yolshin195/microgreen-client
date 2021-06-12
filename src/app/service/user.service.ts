import { Injectable } from '@angular/core';

export interface User {
  id: number,
  name: string,
  phone: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path: string = '/api/user';

  constructor() { }

  findAll() {}
  
  findByPhone(phone: string) {

  }

  save() {}
  
}
