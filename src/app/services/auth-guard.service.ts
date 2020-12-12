import { P } from '@angular/cdk/keycodes';
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
    return token && token.user_id ? true : false;
  }

  public getToken() {
    return this.session && this.session.user_id ? this.session.user_id : '';
  }

  public getLoggedUser() {
    return this.session && this.session ? this.session : {};
  }

  public getLoggedInUserDetails() {
    return this.session ? this.session : {};
  }

  public isAdminUser() {
    const user = this.session ? this.session : {};
    if (user.role === 'admin') {
      return true;
    }
    return false;
  }

  get isUserLoggedIn() {
    return this.isAuthenticated;
  }

  get isAdmin() {
    return this.isAdminUser;
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
