import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-testme',
  templateUrl: './testme.component.html',
  styleUrls: ['./testme.component.css']
})
export class TestmeComponent implements OnInit {
	@Input() name:string;

  constructor() { }

  ngOnInit() {
  }

}
