import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly key = 'access_token';

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.key, token);
  }

  hasToken(): boolean {
    return null !== localStorage.getItem(this.key);
  }

  removeToken(): void {
    localStorage.removeItem(this.key);
  }
}
