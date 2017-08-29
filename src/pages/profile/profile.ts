import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileServiceProvider } from "./profile.service";
import { ProfileModel } from "./profile.model";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileServiceProvider: ProfileServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getProfileData();
  }

  getProfileData() {
    this.profileServiceProvider.getProfile().then(data => {
      this.dataProfile = data;
      console.log(this.dataProfile);
    }, (error) => {
      console.error(error);
    });
  }

}
