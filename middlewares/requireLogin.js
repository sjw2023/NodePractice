// next is the middleware we are goint to call after do some stuff
module.exports = (req, res, next) => {
  //check if user is signed in
  if (!req.user) {
    return res.status(401).send({ error: "you must log in!" });
  }
  //If something bad happen next shouldn;t be excuted
  next();
};
