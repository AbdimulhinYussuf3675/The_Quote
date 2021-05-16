export class Quote {
    id:number;
    name:string;
   date:Date;
    upVote:number;
    downVote:number;
    submitter:string;
    author:string;

    constructor(id:number, author:string,text:string,submitter:string, date:Date){
        this.id=id;
        this.name=text;
        this.submitter=submitter;
        this.author=author;
        this.downVote=0;
        this.upVote=0;
        this.date=date;
    }
}