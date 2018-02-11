import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('userName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
