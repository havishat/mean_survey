import { Component, OnInit } from '@angular/core';
import { SurveysService } from './../surveys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpoll',
  templateUrl: './loginpoll.component.html',
  styleUrls: ['./loginpoll.component.css']
})
export class LoginpollComponent implements OnInit {

  loginobject = {
    name: '',
  }
  updatedlogin;

  constructor(private _surveysService: SurveysService, private _router: Router) { 
 
  }

  ngOnInit() {
    this._surveysService.retrieveid((a) => {
      this.updatedlogin = a;
      this._router.navigateByUrl('/dashboard');
      console.log("id",this.updatedlogin._id)  
    }) 
  }

  onSubmit() {
    this._surveysService.createNote(this.loginobject, (hi) => {
      this._surveysService.retrieveid((a) => {
        console.log("will this work??")
        this.updatedlogin = a;
        this._surveysService.session = a
        this._router.navigateByUrl('/dashboard');
        console.log("login",this.updatedlogin) 
        console.log("id",this._surveysService.session._id)  
      })  
      })

  }

}
