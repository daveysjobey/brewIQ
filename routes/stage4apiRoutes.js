// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/stage4/api/beers/:id", function (req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Beer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbBeer) {
      res.json(dbBeer);
    });
  });
};