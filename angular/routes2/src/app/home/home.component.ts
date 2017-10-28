import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a:number;
  b:number;
  str:string;
  myVar:string;
  //  Form 
  myForm: FormGroup;
  productName: string;

  myFunc():boolean{
    return true;
  }

  constructor(fb: FormBuilder) {
    this.a = 1;
    this.b = 5;
    this.str = 'yes';
    this.myVar = 'B';

     this.myForm = fb.group({
      'productName':  ['', Validators.required]
    });
   }

    onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
  ngOnInit() {
  }

}
