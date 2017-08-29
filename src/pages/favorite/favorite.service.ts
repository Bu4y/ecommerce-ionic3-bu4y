import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { FavoritModel } from "./favorite.model";


/*
  Generated class for the FavoriteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello FavoriteServiceProvider Provider');
  }

  getData(): Promise<FavoritModel> {
    return this.http.get('./assets/example_data/productlist.json')
      .toPromise()
      .then(response => response.json() as FavoritModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
