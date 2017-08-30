import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { App } from "ionic-angular";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginPage } from "../../pages/login/login";
import { AuthorizeModel } from "./authorize.model";
/*
  Generated class for the AuthorizeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthorizeProvider {
  constructor(public http: Http, public app: App) {
    console.log('Hello AuthorizeProvider Provider');

  }

  isAuthorization() {
    let user = JSON.parse(window.localStorage.getItem('e7e_ecommerce_buy_user'));
    if (!user) {
      // this.app.getRootNav().push(LoginPage);
      let nav = this.app.getActiveNav();
      nav.push(LoginPage);
      // console.log('object');
    } else {
      return user;
    }
  }

  // getAuthorization() { // get user
  //   let user = JSON.parse(window.localStorage.getItem('e7e_ecommerce_buy_user'));
  //   if (!user) {
  //     this.app.getRootNavs().push(LoginPage);
  //   } else {
  //     return user;
  //   }
  // }

  onAuthorization(): Promise<AuthorizeModel> { // signin
    return this.http.get('./assets/example_data/profile.json')
      .toPromise()
      .then(response => {
        let data = response.json() as AuthorizeModel;
        window.localStorage.setItem('e7e_ecommerce_buy_user', JSON.stringify(data));
        return data;
      })
      .catch(this.handleError);
  }

  newAuthorization(): Promise<AuthorizeModel> { // signup
    return this.http.get('./assets/example_data/profile.json')
      .toPromise()
      .then(response => {
        let data = response.json() as AuthorizeModel;
        window.localStorage.setItem('e7e_ecommerce_buy_user', JSON.stringify(data));
        return data;
      })
      .catch(this.handleError);
  }

  unAuthorization() {
    window.localStorage.removeItem('e7e_ecommerce_buy_user');
    return;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
