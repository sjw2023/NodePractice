// next is the middleware we are goint to call after do some stuff
module.exports = (req, res, next) => {
  //check if user has enough credit
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Not enough credits!" });
  }
  //If something bad happen next shouldn;t be excuted
  next();
};
