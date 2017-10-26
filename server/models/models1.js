var mongoose = require('mongoose');
var Schema = mongoose.Schema

var LoginSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter a name."], minlength: 3},
    _questionId: [{type: Schema.Types.ObjectId, ref:"Poll"}]
}, {timestamps:true});

mongoose.model('Login', LoginSchema);


var QuestionSchema = new mongoose.Schema({
    question: {type: String,  required: [true, "Please enter quesiton."], minlength: 3},
    // optionone: {type:  {text : String,  required: [true, "Please enter option1."], minlength: 3}},
    // optiontwo: {type: {text: String, required: [true, "Please enter option2."], minlength: 3} },
    // optionthree:{type: {text: String, required: [true, "Please enter option3."], minlength: 3 } },
    // optionfour: {type: {text: String, required: [true, "Please enter option4."], minlength: 3 } },
    optionone: {type:{text:String, score:0}},
    optiontwo: {type:{text:String, score:0}},
    optionthree: {type:{text:String, score:0}},
    optionfour: {type:{text:String, score:0}},
    // optionone: {type:{text:String,required:true, vote:0}},
    // optiontwo: {type:{text:String, vote:0}},
    // optionthree: {type:{text:String, vote:0}},
    // optionfour: {type:{text:String, vote:0}},
    _userId: {type: Schema.Types.ObjectId, ref:"Poll"},
    creator: {type: Schema.Types.String, ref: "Poll"},

}, {timestamps:true});

mongoose.model('Poll', QuestionSchema);