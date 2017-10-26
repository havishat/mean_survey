import { Component, OnInit } from '@angular/core';
import { SurveysService} from '../surveys.service';
import { PollService} from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private name: String;
  private polls;
  // private deletedPollID;
  // private displaypolls: Array<any>;
  private input = {
      key: ''
  };

  

  constructor(private user: SurveysService, private _router: Router, private _poll: PollService) { }

  ngOnInit() {
    this.retrieveid();
    this.displayPolls();
    
  }

  retrieveid() {
    this.user.retrieveid((data) => {
      this.name = data.name;
  })
}

  displayPolls() {
    this._poll.displayPolls((data) => {
      // console.log("data",data)
      this._poll.polls = data
      this.polls = this._poll.polls
      console.log("polls", this.polls)
      // this.displayPolls = data;
      // console.log("Polls", this.displaypolls)
    });
  }

  logout() {
    this.user.logout()
    .then(data => this._router.navigateByUrl('/'))
    .catch(err => console.warn(err));
  }

  deletePoll(id) {
    this._poll.deletePoll(id)
    .then(data => this._router.navigateByUrl('/dashboard'))
    .catch((err) => console.warn(err));
    this.displayPolls()
  }

}
