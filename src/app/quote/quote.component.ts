import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'BOB MARLEY', 'Don’t gain the world and lose your soul. Wisdom is better than silver and gold.', 'Adam', new Date(2020,9,11)),
    new Quote(2,'Johnny Cash', 'Trust gets yoSuccess is not final.failure is not fatal', 'Adam', new Date(2020,9,11)),
    new Quote(3,'joker', 'Just smile', 'Adam', new Date(2020,9,11))
  ];

  upVote(index) {
    this.quotes[index].upVote++;
  }
  downVote(index) {
    this.quotes[index].downVote++;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].id}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    
    }
  }
    addNewQuote(quote){
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  bestQuote:number;
  worstQuote:number;
  text:string;
  submitter:string;

  bestquote(){
    this.bestQuote=0;
    for (let i =0; i<this.quotes.length; i++){
      if(this.quotes[i].upVote>this.bestQuote){
        this.bestQuote=this.quotes[i].upVote;
        this.worstQuote=this.quotes[i].downVote;
        this.submitter=this.quotes[i].submitter;
        this.text=this.quotes[i].name;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
