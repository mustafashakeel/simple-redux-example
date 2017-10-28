import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  @Input()meal:string[];		
  constructor() { }

  ngOnInit() {
  }

}
