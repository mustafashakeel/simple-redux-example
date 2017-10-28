import { Component } from '@angular/core';
import { PriceService } from './price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
 

   currency = 'USD';
  price: number;
  
  constructor(priceService: PriceService) {
    priceService.getPrice(this.currency)
      .then(price => this.price = price);
  }


}
