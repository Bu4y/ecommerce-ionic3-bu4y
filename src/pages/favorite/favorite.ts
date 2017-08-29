import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { FavoriteServiceProvider } from "./favorite.service";
import { FavoritModel } from "./favorite.model";

/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';
  favorite: FavoritModel = new FavoritModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public favService: FavoriteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    this.getData();
  }

  getData() {
    this.favService.getData().then(data => {
      console.log(data);
      this.favorite = data;
    });
  }
  selectTab(index) {
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
  }

}
