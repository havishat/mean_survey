import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class PollService {

  constructor(private _http: Http) { }

      // This function takes poll info and sends a request to the server
    // at the specified route and passes along this poll info which will
    // be used to create a poll. Then it'll receive a response (either success or error)
    // and then send that along to the component

  polls;
  oneQuestion;

  create(pollinfo, callback, errorback) {
    console.log("pollinfo1", pollinfo)
    this._http.post('/polls', pollinfo).subscribe(
      (response) => {
        callback(response.json());       
      },
      (error) => {
        errorback();
        console.log("could not display poll", error)
      }
    );
  }


    // This function will make a request to the server at the specified route
    // and then gets a response (either an error or all of the polls) and then
    // passes that along back to the component

  displayPolls(callback) {
    console.log("1234")
    this._http.get('/polls').subscribe(
      (response) => {
        callback(response.json());      
      },
      (error) => {
        console.log("could not display polls", error)
      }
    );
  }


  deletePoll(id) {
    console.log("iddelete", id)
    return this._http.delete(`/polls/${id}`)
    .map((response: Response) => response.json())
    .toPromise();
// This function will make a request to the server at the specified route
// with the id parameter containing the id passed along into the function
// Then it will receive a response (either a success delete message or an error)
// and pass that along back to the component
}

getPoll(id, callback) {
  console.log("id1", id)
  this._http.get(`/polls/${id}`).subscribe(
    (response) => {
      callback(response.json());     
    },
    (error) => {
      console.log("could not display polls", error)
    }
  );
}

updateQuestion(id, new_polls, callback, errorback){
  this._http.put("/polls/"+id, new_polls).subscribe( 
    (response) => {
      callback(response.json());
      console.log("got in here");
     }, // <— first method
    (error) => { 
      errorback();
      console.log(error);
     } // <— second method
  );
}

}
