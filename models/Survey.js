const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema = newSchema({
  title: String,
  body: String,
  subject: String,
  recipients: [String]
});

mongoose.model("survey", surveySchema);
