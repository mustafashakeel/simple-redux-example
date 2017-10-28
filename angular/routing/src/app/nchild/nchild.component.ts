import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-nchild',
  templateUrl: './nchild.component.html',
  styleUrls: ['./nchild.component.css']
})
export class NchildComponent implements OnInit {
	@Input()student:string[];


  constructor() { }

  ngOnInit() {
  }

}
