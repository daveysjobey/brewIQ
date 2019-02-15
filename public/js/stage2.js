// Get references to page elements
var $mashWaterVol = $("#mashWaterVol");
var $strikeTemp = $("#strikeTemp");
var $mashTemp = $("#mashTemp");
var $allInTime = $("#allInTime");
var $vorlofStartTime = $("#vorlofStartTime");
var $lauterStartTime = $("#lauterStartTime");
var $lauterStopTime = $("#lauterStopTime");
var $spargeStartTime = $("#spargeStartTime");
var $spargeStopTime = $("#spargeStopTime");
var $spargeWaterVol = $("#spargeWaterVol");
var $kettleFullVol = $("#kettleFullVol");
var $preboilGravity = $("#preboilGravity");
var $postboilGravity = $("#postboilGravity");
var $boilStartTime = $("#boilStartTime");
var $whilrpoolStartTime = $("#whilrpoolStartTime");
var $whilrpoolStopTime = $("#whilrpoolStopTime");
var $knockOutStart = $("#knockOutStart");
var $knockOutStop = $("#knockOutStop");
var $knockOutTemp = $("#knockOutTemp");
var $o2Lmp = $("#o2Lmp");
var $yeastName = $("#yeastName");
var $yeastGen = $("#yeastGen");
var $pitchVol = $("#pitchVol");
var $fvTemp = $("#fvTemp");
var $dryhopDate = $("#dryhopDate");
var $celleringDate = $("#celleringDate");
var $submit = $("#submit");
var pathArray = window.location.pathname.split("/");
var BeerId = pathArray[2];
console.log(BeerId);

// The API object contains methods for each kind of request we'll make
var API = {
  saveBeer: function(beer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/stage2",
      data: JSON.stringify(beer)
    });
  },
  getBeers: function() {
    return $.ajax({
      url: "api/beers",
      type: "GET"
    });
  },
  updateStage: function(stage) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "api/beers/" + BeerId,
      type: "PUT",
      data: JSON.stringify(stage)
    });
  },
  deleteBeer: function(id) {
    return $.ajax({
      url: "api/beers/" + id,
      type: "DELETE"
    });
  }
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var beer = {
    mashWaterVol: $mashWaterVol.val().trim(),
    strikeTemp: $strikeTemp.val().trim(),
    mashTemp: $mashTemp.val().trim(),
    allInTime: $allInTime.val().trim(),
    vorlofStartTime: $vorlofStartTime.val().trim(),
    lauterStartTime: $lauterStartTime.val().trim(),
    lauterStopTime: $lauterStopTime.val().trim(),
    spargeStartTime: $spargeStartTime.val().trim(),
    spargeStopTime: $spargeStopTime.val().trim(),
    spargeWaterVol: $spargeWaterVol.val().trim(),
    kettleFullVol: $kettleFullVol.val().trim(),
    preboilGravity: $preboilGravity.val().trim(),
    postboilGravity: $postboilGravity.val().trim(),
    boilStartTime: $boilStartTime.val().trim(),
    whilrpoolStartTime: $whilrpoolStartTime.val().trim(),
    whilrpoolStopTime: $whilrpoolStopTime.val().trim(),
    knockOutStart: $knockOutStart.val().trim(),
    knockOutStop: $knockOutStop.val().trim(),
    knockOutTemp: $knockOutTemp.val().trim(),
    o2Lmp: $o2Lmp.val().trim(),
    yeastName: $yeastName.val().trim(),
    yeastGen: $yeastGen.val().trim(),
    pitchVol: $pitchVol.val().trim(),
    fvTemp: $fvTemp.val().trim(),
    dryhopDate: $dryhopDate.val().trim(),
    celleringDate: $celleringDate.val().trim(),
    BeerId: BeerId
  };

  API.saveBeer(beer).then(function() {
    updateBeerStage();
  });

    $mashWaterVol.val(""),
    $strikeTemp.val(""),
    $mashTemp.val(""),
    $allInTime.val(""),
    $vorlofStartTime.val(""),
    $lauterStartTime.val(""),
    $lauterStopTime.val(""),
    $spargeStartTime.val(""),
    $spargeStopTime.val(""),
    $spargeWaterVol.val(""),
    $kettleFullVol.val(""),
    $preboilGravity.val(""),
    $postboilGravity.val(""),
    $boilStartTime.val(""),
    $whilrpoolStartTime.val(""),
    $whilrpoolStopTime.val(""),
    $knockOutStart.val(""),
    $knockOutStop.val(""),
    $knockOutTemp.val(""),
    $o2Lmp.val(""),
    $yeastName.val(""),
    $yeastGen.val(""),
    $pitchVol.val(""),
    $fvTemp.val(""),
    $dryhopDate.val(""),
    $celleringDate.val("");
};

//hacky way to get stages to update update updating info 
var updateBeerStage = function() {
  var stage = {
    id: BeerId,
    stage: 3,
    stage0: 0,
    stage1: 0,
    stage2: 0,
    stage3: 1,
    stage4: 0
  };
  API.updateStage(stage);

  //gives db time to update before home page renders
  setTimeout(returnHome, 1000);
};

//directs user back home automatically after submitting
var returnHome = function() {
  window.location.href = "/";
};

$submit.on("click", handleFormSubmit);
