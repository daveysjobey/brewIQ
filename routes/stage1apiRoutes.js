// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //creat a new row in Step1 table using new input
  app.post("/stage1/api/stage1/", function(req, res) {
    db.Stage1.create(req.body).then(function(dbStage1) {
      res.json(dbStage1);
    });
  });

  app.put("/stage1/api/beers/:id", function(req, res) {
    db.Beer.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });
};
