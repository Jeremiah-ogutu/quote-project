export class Quote {
  showDescription: boolean;
  constructor(public name: string,public writter: string,public quote: string, public upvote:number,public downvote:number){
    this.showDescription=true;
    this.upvote=0
    this.downvote=0
  }
}