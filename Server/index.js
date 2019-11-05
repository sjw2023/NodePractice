const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./models/user"); // This should ba called first since it creates model class abd passport is using that class
require("./services/passport");

mongoose.connect(keys.mongoURI); //Connect with database with URI of mongoDB Atlas instance

const app = express(); //Creating Wep application

require("./routes/authRoutes")(app); //This is using methods in authRoutes.js

const PORT = process.env.PORT || 5000; // if there isn't port from heroku use 5000
app.listen(PORT);
