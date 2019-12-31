const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //load the model class from mongoDB

passport.serializeUser((user, done) => {
  //user here means user which is now using the connection, user that returns from passport.use callback
  done(null, user.id); //user.id is the id that mongoDB assign to user, why we are using this ? think if we make app that can login with facebook google etc
});

passport.deserializeUser((id, done) => {
  // deserializeUser function takes the function that has userid and callback done function.
  //les turn id into mongoDBID
  User.findById(id) // this function use search criteria as id
    .then(user => {
      done(null, user); // rememver done always taked error object and result
    });
});

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
