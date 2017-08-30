import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { App, LoadingController } from "ionic-angular";
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
  loading = this.loadingCtrl.create({
    content: 'Authorization...'
  });
  constructor(public http: Http, public app: App, public loadingCtrl: LoadingController) {
    console.log('Hello AuthorizeProvider Provider');

  }

  isAuthorization() {
    this.loading.present();
    let user = JSON.parse(window.localStorage.getItem('e7e_ecommerce_buy_user'));
    if (!user) {
      setTimeout(() => {
        this.app.getActiveNav().push(LoginPage);
        this.loading.dismiss();
      }, 1000);
    } else {
      this.loading.dismiss();
      return user;
    }
  }

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

  unAuthorization() { // logout
    window.localStorage.removeItem('e7e_ecommerce_buy_user');
    return;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
