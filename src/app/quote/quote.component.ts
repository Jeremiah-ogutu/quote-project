import { Quote } from '../quote';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("Maji moto hai chomi nyumba","Ogutu Juma","Jeremiah",0,0),
new Quote("Maji ya moto pia huzima moto","sudi","Joseph",0,0),
new Quote("Isipo kufaa akili yako uta kudhuru ujinga wako","sudi","Jakonda",0,0)]

   
  addQuote(emittedQuote:Quote){
    this.quotes.push(emittedQuote)
  }
  
  upvote(i: number){
    this.quotes[i].upvote=0
  }
  downvote(i: number){
    this.quotes[i].downvote=0
  }
  completeQuote(isComplete: any,index: number){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.name =quote.name ;
    quote.quote=quote.quote;
    // quote.completeDate =new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
