import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currency = 'USD';
  price: number;
  
  constructor(priceService: PriceService) {
    priceService.getPrice(this.currency)
      .then(price => this.price = price);
  }



  ngOnInit() {
  }

}
