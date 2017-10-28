import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	students:string[];
	constructor(){
		this.students = ['jack', 'Jill', 'James ', 'Jonah '];

	}
}
