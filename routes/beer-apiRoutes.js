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

  //creat a new row in Step2 table using new input
  app.post("/api/step2", function(req, res) {
    db.Step2.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //creat a new row in Step3 table using new input
  app.post("/api/step3", function(req, res) {
    db.Step3.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //update a row in Beers table
  app.put("/api/beers", function(req, res) {
    console.log(req.body);
    db.Beer.update(req.body, {
      where: { id: req.body.id }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  //update a row in Step1 table
  app.put("/api/step1", function(req, res) {
    console.log(req.body);
    db.Step1.update(req.body, {
      where: { BeerId: req.body.BeerId }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  //update a row in Step2 table
  app.put("/api/step2", function(req, res) {
    console.log(req.body);
    db.Step2.update(req.body, {
      where: { BeerId: req.body.BeerId }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  //update a row in Step3 table
  app.put("/api/step3", function(req, res) {
    console.log(req.body);
    db.Step3.update(req.body, {
      where: { BeerId: req.body.BeerId }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // Delete a beer by id
  app.delete("/api/beers/:id", function(req, res) {
    db.Beer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });
};
