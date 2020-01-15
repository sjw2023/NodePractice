const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const { Schema } = mongoose; same meaning with above

/*
    Creating the schema of model instance which we are going to put into database
*/
const userSchema = new Schema({
  googleId: String,
  credit: { type: Number, default: 0 }
});

/*
    Creating model class which we are going to put into database.
    Model Class is the definition of collection that Mongoose is using.
*/
mongoose.model("users", userSchema); // creates model class in mongoDB
