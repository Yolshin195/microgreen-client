import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from './user.service';

export interface Credential {
  username: string,
  password: string,
  isSave?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private path: string = '/api/user';
  authenticated: boolean = false;
  user?: User;

  constructor(private http: HttpClient) { 
    this.restore();
  }

  authenticate(credential: Credential, callback: Function): void {
    const authorization: string = 'Basic ' + btoa(credential.username + ':' + credential.password);
    const headers = new HttpHeaders(credential ? {
      authorization: authorization,
      "X-Requested-With": "XMLHttpRequest"
    } : {});

    this.http.get<User>(this.path + '/login', {headers: headers}).subscribe(user => {
      if (user) {
        this.authenticated = true;
        this.user = user;
        if (credential.isSave) {
          this.save(authorization);
        }
      } else {
        this.authenticated = false;
        this.user = undefined;
        this.remove();
      }

      return callback && callback(!this.authenticated, this.user);
    })
  }

  logout(callback: Function) {
    this.http.post('/api/logout', {}).pipe(
      finalize(() => {})
    ).subscribe(() => {
        this.authenticated = false;
        this.user = undefined;
        this.remove();
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

  restore() {
    let authorization = this.get();
    if (authorization !== null) {
      const headers = new HttpHeaders({
        authorization: authorization,
        "X-Requested-With": "XMLHttpRequest"
      });
  
      this.http.get<User>(this.path + '/login', {headers: headers}).subscribe(user => {
        if (user) {
          this.authenticated = true;
          this.user = user;
        } else {
          this.authenticated = false;
          this.user = undefined;
          this.remove();
        }
      })
    }
  }

  save(authorization: string): void {
    localStorage.setItem("authorization", authorization);
  }

  get(): string | null {
    return localStorage.getItem("authorization");
  }

  remove(): void {
    localStorage.removeItem("authorization");
  }
}
