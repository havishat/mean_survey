var controller1 = require('../controllers/controllers1.js');
//var polls = require('../controllers/polls.js');
var path = require('path');

module.exports = function(app) {

    // This is the method we can use to grab the user's
	// name from the database after it is stored in session
	// by initial login
    app.get('/login/one', controller1.getid);

    //logs the user in or creates user
    app.post('/login', controller1.create);

    app.get('/login/logout', controller1.logout);
    // Logs the user out by clearing session
    
    app.post('/polls', controller1.createPoll);
	// Create a new poll in the database

    //get all polls
    app.get('/polls', controller1.getall);

    // //Delete a poll
    app.delete('/polls/:id', controller1.delete);

    // // Get a single poll
    app.get('/polls/:id', controller1.getPoll);

    // //Get all of one polls options
    // app.get('/options/:id', polls.getOptions);

    // //Add a vote to an option
    app.put('/polls/:id', controller1.updateQuestion);

    // //Get a single options
    // app.get('/options/one/:id', polls.getOption);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./surveysangular/dist/index.html"))
    });


}