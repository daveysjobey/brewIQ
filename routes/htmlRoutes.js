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

  app.get("/stage0", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.render("stage0", {
        beers: dbBeers
      });
    });
  });

  app.get("/stage1", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.render("stage1", {
        beers: dbBeers
      });
    });
  });

  app.get("/stage2", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.render("stage2", {
        beers: dbBeers
      });
    });
  });

  app.get("/stage3", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.render("stage3", {
        beers: dbBeers
      });
    });
  });

  app.get("/stage4", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeers) {
      res.render("stage4", {
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
