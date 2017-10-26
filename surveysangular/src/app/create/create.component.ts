import { Component, OnInit } from '@angular/core';
import { SurveysService} from '../surveys.service';
import { PollService} from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  constructor( private _us: SurveysService, private _ps: PollService, private _router: Router) { }

  private name: String;
   newpoll = {
    question: '',
    optionone: {text:'',score:0},
    optiontwo: {text:'',score:0},
    optionthree: {text:'',score:0},
    optionfour: {text:'',score:0},
    _userId: '',
    creator: '',
  }


  ngOnInit() {
    this.retrieveid();
  }


  retrieveid() {
    this._us.retrieveid((data) => {
      // console.log("data?")
      this.name = data;
      // console.log("2name",this.name)
  })
  }
  createPoll() {
    this.newpoll.creator = this._us.session.name;
    this.newpoll._userId =  this._us.session._id
    console.log("poll", this.newpoll)
    this._router.navigate(["/dashboard"])
    this._ps.create(this.newpoll, (res) => { //callback is here
      console.log("pollinfo2",res);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
   
  }

}
