import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileServiceProvider } from "./profile.service";
import { ProfileModel } from "./profile.model";

import { AuthorizeProvider } from "../../providers/authorize/authorize";
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  dataProfile: ProfileModel = new ProfileModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public authorizeProvider: AuthorizeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillEnter() {
    this.dataProfile = this.authorizeProvider.isAuthorization();
  }

  // getProfileData() {
  //   this.profileServiceProvider.getProfile().then(data => {
  //     this.dataProfile = data;
  //     console.log(this.dataProfile);
  //   }, (error) => {
  //     console.error(error);
  //   });
  // }

}
