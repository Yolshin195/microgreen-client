import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.service';

export interface Credential {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private path: string = '/api/user';
  authenticated = false;

  constructor(private http: HttpClient) { }

  authenticate(credential: Credential, callback: Function): void {
    const headers = new HttpHeaders(credential ? {
      authorization: 'Basic' + btoa(credential.username + ':' + credential.password)
    } : {});

    this.http.get<User>(this.path, {headers: headers}).subscribe()
  }
}
