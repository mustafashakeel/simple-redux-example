import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage} from '../../pages/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {



  }

  loadUsers(name:string){
    this.navCtrl.push(UserPage, {userName:name});

  }
}
