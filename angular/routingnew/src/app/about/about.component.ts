import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit {
  constructor(){

  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
    }
    
  // myForm: FormGroup;
  
  //   constructor(fb: FormBuilder) {
  //     this.myForm = fb.group({
  //       'sku': ['ABC123']
  //     });
  //   }
  
    ngOnInit() {
    }
  
  //   onSubmit(value: string): void {
  //     console.log('you submitted value: ', value);
  //   }
  

  // myForm: FormGroup;
  // sku: AbstractControl;

  // constructor(fb: FormBuilder) {
  //   this.myForm = fb.group({
  //     'sku':  ['', Validators.compose([
  //       Validators.required, skuValidator])]
  //   });

  //   this.sku = this.myForm.controls['sku'];
  // }

  // onSubmit(value: string): void {
  //   console.log('you submitted value: ', value);
  // }

  // onSubmit(form: any): void {
  //   console.log('you submitted value:', form);
  // } 



}

// function skuValidator(control: FormControl): { [s: string]: boolean } {
//   if (!control.value.match(/^123/)) {
//     return {invalidSku: true};
//   }
// }