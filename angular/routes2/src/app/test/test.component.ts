import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: string;
  a:number;
  b:number;
  str:string;
  myFunc():boolean{
    return true;
  }

constructor(){
this.name = "John Smith";
  this.a = 1;
    this.b = 5;
    this.str = 'yes';
}

  ngOnInit() {
  }

}
