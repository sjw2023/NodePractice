const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", "/auth/google"], {
      target: "https://obscure-taiga-57274.herokuapp.com"
    })
  );
  //app.use(proxy(["/api", "*"], { target: "http://localhost:5000" })); //route all the api request to localhost:5000
};
