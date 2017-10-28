import { Component, OnInit, Input, Output,EventEmitter,AfterContentInit,ElementRef } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product;
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  @Output() great: EventEmitter<string> = new EventEmitter<string>();

  constructor(private elementRef:ElementRef) { }
  

// onClick(){
//   this.notify.emit(" This is Great ");
// }

onClick(name:HTMLInputElement):void{
  
  const aa:string = "";
  console.log("this is great " ,this); 

  
 //if (name.value){
  this.notify.emit(name.value);
 //}
 
 this.great.emit()
    console.log(" Great ",name.value );
   
  }
  
  selectProduct(test:string):void{
    console.log(" another one ",this.elementRef.nativeElement.innerHTML);
    // console.log("another one works ", test.nativeElement.innerHTML);
  }



  // likeme(){
  //   var aa:string;
  //   aa = "Mustafa";
  
  //   this.liked.emit(aa);
  // }
  ngOnInit() {
    
  }

}
