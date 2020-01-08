const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy(["/api", "/auth/google"], { target: "http://localhost:5000" }));
  //app.use(proxy(["/api", "*"], { target: "http://localhost:5000" })); //route all the api request to localhost:5000
};
