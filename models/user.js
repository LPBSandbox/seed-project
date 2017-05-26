var mongoose = require("mongoose");
//get access to Schema constructor
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//create a new schema for our app
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},  //will encrypt later
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: "Message"}]
});

// Apply the uniqueValidator plugin to userSchema.
schema.plugin(uniqueValidator);
// export the model with associated name and schema
module.exports = mongoose.model("User", schema);
