const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/user"); // This should ba called first since it creates model class abd passport is using that class
require("./services/passport");

mongoose.connect(keys.mongoURI); //Connect with database with URI of mongoDB Atlas instance

const app = express(); //Creating Wep application

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // I want this cookie last for 30days
    keys: [keys.cookieKey] //to recognize the cookie we are going to use keys, but we don't want show it to public lets put it into keys.js
  })
); //going to tell express that we need to add cookie

//To make passport use cookieKey
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); //This is using methods in authRoutes.js

const PORT = process.env.PORT || 5000; // if there isn't port from heroku use 5000
app.listen(PORT);
