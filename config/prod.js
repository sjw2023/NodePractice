//prod.js -  production keys.
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
  //googleRedirectURI: "https://obscure-taiga-57274.herokuapp.com/"
};
