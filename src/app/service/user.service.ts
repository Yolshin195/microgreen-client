import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Role {

}

export interface User {
  id: number,
  username: string,
  email: string,
  phone: string,
  date: Date,
  roles: Role[],
}

export interface RegisterUser {
  email: string,
  phone: string,
  username: string,
  password: string,
  repeatPassword: string,
  agree: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path: string = '/api/user';

  constructor(private http: HttpClient) { }

  registre(registerUser: RegisterUser): Observable<User> {
    return this.http.post<User>(`${this.path}/register`, registerUser);
  }

  findAll() {}
  
  findByPhone(phone: string) {

  }

  save() {}
  
}
