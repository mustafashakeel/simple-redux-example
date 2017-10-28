import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
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

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }


// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup
// } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],

// })
// export class AppComponent implements OnInit {
//   myForm: FormGroup;

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       'sku': ['ABC123']
//     });
//   }

//   ngOnInit() {
//   }

//   onSubmit(value: string): void {
//     console.log('you submitted value: ', value);
//   }

// }



// export class AppComponent {
//   title = 'app';
//   onSubmit(form:any):void{
//     console.log(`The Info Submited is ${form.myinfo}`);

//     // console.log('The Info Submited is ',form.myinfo);
//   }
// }




// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   onSubmit(form:any):void{
//     console.log(`The Info Submited is ${form.myinfo}`);

//     // console.log('The Info Submited is ',form.myinfo);
//   }
// }
