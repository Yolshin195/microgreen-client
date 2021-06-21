import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
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
  authenticated: boolean = false;
  user?: User;

  constructor(private http: HttpClient) { }

  authenticate(credential: Credential, callback: Function): void {
    const headers = new HttpHeaders(credential ? {
      authorization: 'Basic ' + btoa(credential.username + ':' + credential.password),
      "X-Requested-With": "XMLHttpRequest"
    } : {});

    this.http.get<User>(this.path + '/login', {headers: headers}).subscribe(user => {
      if (user) {
        this.authenticated = true;
        this.user = user;
        callback(false, user);
      } else {
        this.authenticated = false;
        this.user = undefined;
        callback(true);
      }
    })
  }

  logout(callback: Function) {
    this.http.post('/api/logout', {}).pipe(
      finalize(() => {})
    ).subscribe(() => {
        this.authenticated = false;
        this.user = undefined;
        return callback && callback();
    });
  }

  isAdmin(): boolean {
    if (this.authenticated && this.user) {
      console.log('app.service isAdmin: ', this.user.roles.find(role => role.authority === "ADMIN"), this.user);
      return this.user.roles.find(role => role.authority === "ADMIN") !== undefined;
    }

    return false;
  }
}
