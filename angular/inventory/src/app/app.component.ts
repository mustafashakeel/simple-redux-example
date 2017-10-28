import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product:Product;
  showMessage:string = "";
  

  constructor(){
    // let showMessage:string;

  this.product  = new Product(
      "SPICE",
      "IDLY Masala",
      "asfasdf",
      ['food','spice'],
      123

    )




    // this.product  = [new Product(
    //   "SPICE",
    //   "IDLY Masala",
    //   "asfasdf",
    //   ['food','spice'],
    //   123

    // ),new Product(
    //   "GRAIN123",
    //   "RICE",
    //   "riceImage",
    //   ['food','grain'],
    //   54

    // ),
    // ]

  }

  productWasSelected(product:Product):void {
    console.log(" Product Clicked ", product);
  }
  onNotifyClicked(message:string):void{
    this.showMessage = message;
  }
  
}
