// Requiring our models
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {


  //creat a new row in Step1 table using new input
  app.post("/stage1/api/stage1/", function (req, res) {
    db.Stage1.create(req.body).then(function (dbStage1) {
      res.json(dbStage1);
    });
  });
};
