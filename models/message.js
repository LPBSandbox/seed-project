var mongoose = require("mongoose");
//get access to Schema constructor
var Schema = mongoose.Schema;

//create a new schema for our app
var schema = new Schema({
    message: {type: String, required:true},
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

// export the model with associated name and schema
module.exports = mongoose.model("Message", schema);
