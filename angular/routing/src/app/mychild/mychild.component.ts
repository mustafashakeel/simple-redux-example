import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.css']
})
export class MychildComponent implements OnInit {


@Input()myname:string[];

  constructor() { }

  ngOnInit() {
  
	console.log(" name",this.myname);
  }

}
