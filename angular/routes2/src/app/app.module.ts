import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import {RouterModule,Routes} from '@angular/router';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { TestPipe } from './test.pipe';
import { TestComponent } from './test/test.component';

const routes =[
   // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

]; 
@NgModule({
  declarations: [
    AppComponent,HomeComponent,
    ContactComponent,
    AboutComponent,
    TestPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
      RouterModule.forRoot(routes), // <-- routes
  ],
  providers: [
     { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
