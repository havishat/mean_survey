import { Component, OnInit } from '@angular/core';
import { SurveysService} from '../surveys.service';
import { PollService} from '../poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from './../question';




@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  private oneQuestion = {_id:"", question:""};
  private id = "";

  constructor(private user: SurveysService, private _router: Router, private _poll: PollService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    })
   }

  ngOnInit() {
   
    this.getPoll(this.id);
  }

  getPoll(id) {
    console.log("id2", id)
    this._poll.getPoll(id, (data) => {
     this._poll.oneQuestion = data
      //console.log("this._poll.polls", this._poll.polls)
      this.oneQuestion = this._poll.oneQuestion
      console.log("oneQuestion", this.oneQuestion)
    });
  }

  vote(curr_count) {
    // this.oneQuestion.optionone.score =this.oneQuestion.optionone.score + 1
    curr_count.score +=1;
    console.log(curr_count);
    console.log("before saving",this.oneQuestion);
    this._poll.updateQuestion(this.oneQuestion._id, this.oneQuestion, (res) => {
      this.oneQuestion = this.oneQuestion;
    }, () => {
      console.log("error something")
    });
    console.log("this is one item",this.oneQuestion);
  }

}


