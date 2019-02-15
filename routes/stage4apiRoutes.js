// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting stage1 info
  app.get("/api/stage1", function (req, res) {
    var query = {};
    if (req.query.BeerId) {
      query.BeerId = req.query.BeerId;
    }
    db.Beer.findAll({
      where: query
    }).then(function (dbStage1) {
      res.json(dbStage1);
    });
  });

  //creat a new row in Step1 table using new input
  app.post("/api/step1", function (req, res) {
    db.Step1.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};