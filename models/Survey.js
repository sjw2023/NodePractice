const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = newSchema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.type.ObjectID, ref: "user" },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("survey", surveySchema);
