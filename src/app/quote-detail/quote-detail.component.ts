import { Quote } from '../quote';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quotecomplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote(){
    this.quote.upvote=this.quote.upvote+1;
  }
  downvote(){
    this.quote.downvote=this.quote.downvote+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
