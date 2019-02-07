var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.render("index", {
        //msg: "Welcome!",
        beers: dbBeers
      });
    });
  });

  // Load beer page and pass in an beer by id
  app.get("/beer/:id", function(req, res) {
    db.Beer.findOne({ where: { id: req.params.id } }).then(function(dbBeer) {
      res.render("beer", {
        beer: dbBeer
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
