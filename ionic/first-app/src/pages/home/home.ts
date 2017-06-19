import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Detail } from '../detail/detail';
import { PeopleData } from '../../providers/people-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PeopleData]
})
export class HomePage {

  public people = new Array();
  private detailPage;

  constructor(public navCtrl: NavController, public peopleData:PeopleData) {
    peopleData.getPeople().subscribe(people => {
      console.log('people',people);
      this.people = people;
    });
    this.detailPage = Detail;
  }

  loadDetail(person) {
    console.log(person);
    this.navCtrl.push(this.detailPage, {person:person});
  }

}
