// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting stage1 info
  //creat a new row in Step1 table using new input
  app.post("/stage3/api/stage3/", function(req, res) {
    db.Stage3.create(req.body).then(function(dbStage3) {
      res.json(dbStage3);
    });
  });

  app.put("/stage3/api/beers/:id", function(req, res) {
    db.Beer.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });
};
