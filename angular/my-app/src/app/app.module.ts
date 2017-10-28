import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestmeComponent } from './testme/testme.component';
import { HttpModule } from '@angular/http';
import { PriceService } from './price.service';

@NgModule({
  declarations: [
    AppComponent,
    TestmeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
