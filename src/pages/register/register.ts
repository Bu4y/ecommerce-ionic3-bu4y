import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { userInfo } from "./register.model";
import { RegisterServiceProvider } from "./register.service";
import { AuthorizeProvider } from "../../providers/authorize/authorize";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signup: FormGroup;
  userInfo: userInfo = new userInfo();
  constructor(public navCtrl: NavController, public navParams: NavParams, public regisService: RegisterServiceProvider, public authorizeProvider: AuthorizeProvider) {
    this.signup = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doSignup() {
    this.userInfo = this.signup.value;
    
    console.log(this.userInfo);
    this.authorizeProvider.newAuthorization().then((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    });
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signup.value.email)) {
    //   if (this.signup.value.password.length < 7) {
    //     alert('Please input password at less 8 character');
    //   } else if (this.signup.value.password !== this.signup.value.confirm_password) {
    //     alert("Passwords do not match")
    //   } else {
    //     this.signupservice.signup(data).then(res => {
    //       localStorage.setItem('user', JSON.stringify(res));
    //       this.nav.pop();
    //       // this.nav.setRoot(this.main_page.component);  
    //     }).catch(err => {
    //       let error = JSON.parse(err._body);
    //       alert(error.message.replace("11000 duplicate key error collection: mean-secret.users index:", ""));
    //     });


    //   }
    // } else {
    //   alert('email incorrect')
    // }
    // console.log('DATA REGISTER :' + JSON.stringify(this.signup.value));

  }

}
