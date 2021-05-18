import { Quote } from '../quote';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("Maji moto hai chomi nyumba","Ogutu Juma","Jeremiah",0,0,new Date(2021,5,17)),
new Quote("Maji ya moto pia huzima moto","sudi","Joseph",0,0,new Date(2021,5,17)),
new Quote("Asiye sikia daima kajitakia","sudi","Jakonda",0,0,new Date(2021,5,17)),
new Quote("Usie pue chungu njikoni ikiwa pishi halija iva","Wakanda","Jakonda",0,0,new Date(2021,5,17)),
new Quote("heri kidogo mkononi kuliko kubwa chenye ahadi","Denis","Jakonda",0,0,new Date(2021,5,17)),
// new Quote("Samaki aliye funga mdomo hakamatwi na dowano","sudi","Jakonda",0,0),new Date(2021,5,17)),
new Quote("Daima nguruwe hawi mwenyekiti katika kamati ya usafi","Mwana wa babu","Sultan",0,0,new Date(2021,5,17))]
  premNum!: number;
  lastNum!: number;
  counter!: number;
  preNum!: number;

   
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
      let toDelete =confirm('~Are you sure you want to delete')
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
  highestupvote(){
    this.premNum = 0
    this.lastNum = 0
    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  

  }

  constructor() { }

  ngOnInit(){
  }

}
