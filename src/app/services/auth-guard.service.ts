import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class AuthGuardService implements CanActivate {

  session: any = {};

  constructor(public router: Router) {
    this.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    let token: any = localStorage.getItem('moneyism_token');
    if (token) {
      token = JSON.parse(token);
    }
    this.session = token;
    return token && token.id ? true : false;
  }

  public getToken() {
    return this.session && this.session.id ? this.session.id : '';
  }

  public getLoggedUser() {
    return this.session && this.session ? this.session : {};
  }

  public getLoggedInUserDetails() {
    return this.session ? this.session : {};
  }

  get isUserLoggedIn() {
    return this.isAuthenticated;
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
