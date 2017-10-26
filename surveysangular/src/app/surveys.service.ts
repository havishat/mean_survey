import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // <— Imported
import 'rxjs/add/operator/map';

@Injectable()
export class SurveysService {

  constructor(private _http: Http) { }

  session;

  retrieveid(callback) {
    // console.log("1")
    this._http.get('/login/one').subscribe(
      (response) => {
        callback(response.json());      
      },
      (error) => {
        console.log("could not retrive all data", error)
      }
    );
  }

  logout() {
    return this._http.get('/login/logout')
    .map((response: Response) => response.json())
    .toPromise();
// This sends a request to the server at the specified route
// It receives a response (which is "bye bye") and sends that
// back to our component
}

  createNote(user, callback) {
    console.log("in taskserv",user)
    return this._http.post('/login', user).subscribe(
      (response) => {
        console.log("login sent to response", response);
        this.session = response
        callback()
      },
      (error) => {
        console.log("could not login", error);
      }
    );
  }

}
