import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'BOB MARLEY', 'Don’t gain the world and lose your soul. Wisdom is better than silver and gold.', 'Adam', new Date(2021,7,5)),
    new Quote(2,'MOHAMED ALI', 'Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even.', 'Adam', new Date(2021,2,11)),
    new Quote(3,'JACK HANDEY', 'Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.', 'Adam', new Date(2021,2,11))
  ];

  upVote(index) {
    this.quotes[index].upVote++;
  }
  downVote(index) {
    this.quotes[index].downVote++;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote ${this.quotes[index].id}?`)

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
