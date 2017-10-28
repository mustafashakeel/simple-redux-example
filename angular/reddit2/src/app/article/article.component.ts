import { Component, 
  OnInit,
  Input,
HostBinding } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:'row'
  }
})
export class ArticleComponent implements OnInit {

  // votes:number;
  // title:string;
  // link:string;
  @Input()article:Article;
   @HostBinding('attr.class') cssClass = 'row';

  constructor() {
    // this.title = "Angular 4";
    // this.link = "www.angular.io";
    // this.votes = 10;
   }

   voteUp():boolean{
  //  this.votes +=1;
  this.article.voteUp();

    return false;
   }
     
   
   voteDown():boolean{
  //   this.votes -=1;
  this.article.voteDown();
     return false;
   }


  ngOnInit() {
  }

}
