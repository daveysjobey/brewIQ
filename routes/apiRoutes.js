var db = require("../models");

module.exports = function(app) {
  // Get all beers
  app.get("/api/beers", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.json(dbBeers);
    });
  });

  // Create a new beer
  app.post("/api/beers", function(req, res) {
    db.Beer.create(req.body).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // Updarte an existing beer
  app.put("/api/beers", function(req, res) {
    db.Beer.update(req.body).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // Delete a beer by id
  app.delete("/api/beers/:id", function(req, res) {
    db.Beer.destroy({ where: { id: req.params.id } }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });
};
