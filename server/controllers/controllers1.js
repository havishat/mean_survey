var mongoose = require('mongoose');
var Login = mongoose.model('Login');
var Poll = mongoose.model('Poll');
var session = require('express-session');




module.exports = {

    createPoll: function(req, res) {
        console.log("inside formcreate");
        console.log("pollinfo3", req)
        var poll= new Poll(
            {
                question: req.body.question,
                optionone: req.body.optionone,
                optiontwo: req.body.optiontwo,
                optionthree: req.body.optionthree,
                optionfour: req.body.optionfour,
            }
        );
        poll._userId = req.body._userId
        poll.creator = req.body.creator

    poll.save(function (err, data) {
            console.log("pollinfo4", data)
            if(err) {
                res.json(err);
                return;
            }else {
                res.json(data);

            }
        });
    }, 

    getall: function(req, res) {
        console.log("pollsall body" ,req.body)
     //   var poll= new Poll(req.body);
        Poll.find({}, (err, polls) => {
            if(err){
                return res.status(401).json(err);
            } else {
                return res.json(polls);
            }
        })
    },

    //delete question from the dashboard
    delete: function (req, res) {
        Poll.remove({_id: req.params.id}, (err) => {
            if(err) {
                return res.status(500).json(err);
            }
        })
        return res.json("Deleted!")
    },

    //find one question from the poll
    getPoll: function (req, res) {
        console.log("getpoll",req.params.id)
        Poll.findOne({_id: req.params.id}, (err, data) => {
            if(err) {
                return res.status(401).json(err);
            }
            return res.json(data);
        })
    },


    updateQuestion: function(req, res) {
        console.log("POST DATA-----", req.body);
        console.log("ID", req.params.id);

        Poll.update({_id:req.params.id}, req.body, function(err, item) {
            if(err) {
                console.log('something went wrong saving item');
                console.log(err.errors);
                // res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully updated a item!');
                res.json(item);
            }
        })
    },

    // vote: function (req, res) {
    //     Poll.update({_id: req.body._id},{$inc: {vote: 1}}, (err) => {
    //         if(err){
    //             return res.status(401).json(err);
    //         }
    //         return res.json("yay, i voted!")
    //     })
    // },

       // This method is only run after the user is logged in.
    // Thus the name is already stored in session
    // So, this method just grabs the name from session to be
    // used in our front end
    getid: function(req, res) {
        console.log("inside showall");
        if(req.session.user) {
            return res.json(req.session.user);
        }else{
            return res.status(500).json("Not logged in")
        }
    },

        // This method finds the user in the database and if they exist, then
    // it'll log them in and store the name in session
    // If they don't exist, it'll create a new user in the database and then
    // save their name in session


   

    create: function (req, res) {
        // console.log("inside create", req.body);
        // console.log(req.body);
        //var job = new Login(req.body);
        Login.findOne({name: req.body.name}, (err, user) => {
            if(err) {
                return res.status(401).json(err)
            }
            else if(user) {
                console.log("helow", user)
                req.session.user = user
                // console.log("session",req.session.user)
                res.json({user})
            }
            else {
                let user = new Login(req.body);
                console.log("hello2", user)
                user.save((err) => {
                    if(err){
                        return res.status(401).json(err);
                    }
                    else{
                        console.log(`${user} has been saved`)
                        req.session.user = user;
                        console.log("session",req.session.user)
                        res.json({user});
                    }
                })
            }
        })
    },

    logout: function (req, res) {
        req.session.destroy()
		return res.json('bye bye');
    }
    // Logout clears our session


}