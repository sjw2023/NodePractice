const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //load the model class from mongoDB

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback" // error happend 'bad request' -> it needs ful URL
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }) // Check if useris already inside of the collection, It returns the promisses
        .then(existingUser => {
          //It returns record if user is exist or null
          if (existingUser) {
            //we already have a record with the given profile ID
            done(null, existingUser); //Something like return, null is return no error, second is record
          } else {
            //we don't have a user recod with this ID, make a new record
            //new User({ googleId: profile.id })//Creating the model instance but not put it into
            new User({ googleId: profile.id })
              .save() // this creates the model instance and save into database
              .then(user => done(null, user)); // if save has been done succesfully return( callback )
          }
        });
      //console.log("access token", accessToken);
      //console.log("regresh token", refreshToken);
      //console.log("profile", profile);
    }
  )
);
