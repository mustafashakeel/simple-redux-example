import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string;
  family:string[];

  constructor() { 
    this.name = 'Mustafa Qureshi';
    this.family = ['Mustafa','Eisa','Amer','Mehju','Sara','Farha','Shaista'];
  }

  ngOnInit() {
  }

}
