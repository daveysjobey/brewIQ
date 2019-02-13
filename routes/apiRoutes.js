var db = require("../models");

module.exports = function (app) {
  // Get all beers
  app.get("/api/beers", function (req, res) {
    db.Beer.findAll({}).then(function (dbBeers) {
      res.json(dbBeers);
    });
  });

  // Create a new beer
  // app.post("/api/beers", function (req, res) {
  //   db.Beer.create(req.body).then(function (dbBeer) {
  //     res.json(dbBeer);
  //   });
  // });

  //creat a new row in Beer table using new input
  app.post("/api/beers", function(req, res) {
    console.log('beers post');
    db.Beer.create({
      brand: req.body.brand,
      style: req.body.style,
      batchNumber: req.body.batchNumber,
      brewerName: req.body.brewerName,
      fermenter: req.body.fermenter,
      brewDate: req.body.brewDate,
      stage: req.body.stage
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //creat a new row in Step1 table using new input
  app.post("/api/step1", function(req, res) {
    console.log('step1 post');
    db.Step1.create({
      ingredient1: req.body.ingredient1,
      ingredient1Weight: req.body.ingredient1Weight,
      ingredient2: req.body.ingredient2,
      ingredient2Weight: req.body.ingredient2Weight,
      ingredient3: req.body.ingredient3,
      ingredient3Weight: req.body.ingredient3Weight,
      ingredient4: req.body.ingredient4,
      ingredient4Weight: req.body.ingedient4Weight,
      ingredient5: req.body.ingredient5,
      ingredient5Weight: req.body.ingredient5Weight,
      zincWeight: req.body.zincWeight,
      wirlflocWeight: req.body.wirlflocWeight,
      CaCl2Weight: req.body.CaCl2Weight,
      CoSo4Weight: req.body.CoSo4Weight,
      hop1: req.body.hop1,
      hop1Weight: req.body.hop1Weight,
      hop1Boil: req.body.hop1Boil,
      hop2: req.body.hop2,
      hop2Weight: req.body.hop2Weight,
      hop2Boil: req.body.hop2Boil,
      hop3: req.body.hop3,
      hop3Weight: req.body.hop3Weight,
      hop3Boil: req.body.hop3Boil,
      dryhop1: req.body.dryhop1,
      dryhop1Weight: req.body.dryhop1Weight,
      dryhop1Boil: req.body.dryhop1Boil,
      dryhop2: req.body.dryhop2,
      dryhop2Weight: req.body.dryhop2Weight,
      dryhop2Boil: req.body.dryhop2Boil,
      dryhop3: req.body.dryhop3,
      dryhop3Weight: req.body.dryhop3Weight,
      dryhop3Boil: req.body.dryhop3Boil,
      volUnits: req.body.volUnits,
      notes: req.body.notes,
      BeerId: req.body.BeerId
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //creat a new row in Step2 table using new input
  app.post("/api/step2", function(req, res) {
    console.log('step2 post');
    db.Step2.create({
      mashWaterVol: req.body.mashWaterVol,
      strikeTemp: req.body.strikeTemp,
      mashTemp: req.body.mashTemp,
      allInTime: req.body.allInTime,
      vorlofStartTime: req.body.vorlofStartTime,
      lauterStartTime: req.body.lauterStartTime,
      spargeStartTime: req.body.spargeStartTime,
      spargeStopTime: req.body.spargeStopTime,
      lauterStopTime: req.body.lauterStopTime,
      spargeWaterVol: req.body.spargeWaterVol,
      kettleFullVol: req.body.kettleFullVol,
      preboilGravity: req.body.preboilGravity,
      boilStartTime: req.body.boilStartTime,
      whirlpoolStartTime: req.body.whirlpoolStartTime,
      whirlpoolStopTime: req.body.whirlpoolStopTime,
      knockOutStart: req.body.knockOutStart,
      knockOutStop: req.body.knockOutStop,
      knockOutTemp: req.body.knockOutTemp,
      o2Lpm: req.body.o2Lpm,
      postboilGravity: req.body.postboilGravity,
      yeastName: req.body.yeastName,
      yeastGen: req.body.yeastGen,
      pitchVol: req.body.pitchVol,
      fvTemp: req.body.fvTemp,
      dryhopDate: req.body.dryhopDate,
      celleringDate: req.body.celleringDate,
      BeerId: req.body.BeerId
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //creat a new row in Step3 table using new input
  app.post("/api/step3", function(req, res) {
    console.log('step3 post');
    db.Step3.create({
      brightTank: req.body.brightTank,
      transferDate: req.body.transferDate,
      transferVol: req.body.transferVol,
      kegDate: req.body.kegDate,
      kegVol: req.body.kegVol,
      BeerId: req.body.BeerId
    }).then(function(dbPost) {
      res.json(dbPost);
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
    db.Beer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });
};