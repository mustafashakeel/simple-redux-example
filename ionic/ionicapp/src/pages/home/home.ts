import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserPage} from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToUsers(){
    this.navCtrl.push(UserPage );
  }

}
