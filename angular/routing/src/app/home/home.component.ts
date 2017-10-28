import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qureshis:string[];
  food:string[];

  constructor(private router: Router, private authService: AuthService) {

    this.qureshis = ['Mustafa','Eisa','Amer','Mehju','Sara','Farha','Shaista'];

    this.food = ['Sandwitch','Burger','Noodles'];
   }


  ngOnInit() {
  }

  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
