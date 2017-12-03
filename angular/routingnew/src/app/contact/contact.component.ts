import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  onSubmit(form:any):void{
    console.log(`The Info Submited is ${form.myinfo}`);
    // console.log('The Info Submited is ',form.myinfo);
    }
    

  ngOnInit() {
  }

}
