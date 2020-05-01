const path = require("path");

const users = require("./api/users");



function delegateRoutesFor(app) {
  app.use("/api/users", users)
  app.use("/api/savequiz", quizResult)
  


  return app;
}

module.exports = delegateRoutesFor;


