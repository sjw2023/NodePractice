const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/user"); // This should ba called first since it creates model class abd passport is using that class
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI); //Connect with database with URI of mongoDB Atlas instance

const app = express(); //Creating Wep application

//This will call all the middlewares whenever it request requested.

app.use(bodyParser.json());

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
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // this part will be executed only application is production
  //Express will serve up production assets
  //like our main.js, or main.css file
  app.use(express.static("client/build")); //if any get request comes in for some route or some file or absolutely anything of application
  // that we do not understand then look into client/build directory to find it.

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  //it says if someone requte the route that we do not understand just serve in up to index.html
  //toss the request to reacet side server.
}

const PORT = process.env.PORT || 5000; // if there isn't port from heroku use 5000
app.listen(PORT);
