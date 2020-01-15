const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin"); // wire up with require log in

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    }); //make new charge object

    req.user.credit += 5; // update
    const user = await req.user.save(); // save to DB

    res.send(user); //send back to web
  });
};
