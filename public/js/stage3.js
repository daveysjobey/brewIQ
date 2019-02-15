// Get references to page elements
var $brightTank = $("#brightTank");
var $transferDate = $("#transferDate");
var $transferVol = $("#transferVol");
var $kegDate = $("#kegDate");
var $kegVol = $("#kegVol");
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
      url: "api/stage3",
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
    brightTank: $brightTank.val().trim(),
    transferDate: $transferDate.val().trim(),
    transferVol: $transferVol.val().trim(),
    kegDate: $kegDate.val().trim(),
    kegVol: $kegVol.val().trim()
  };

  API.saveBeer(beer).then(function() {
    updateBeerStage();
  });

  $brightTank.val("");
  $transferDate.val("");
  $transferVol.val("");
  $kegDate.val("");
  $kegVol.val("");
};

//hacky way to get stages to update update updating info 
var updateBeerStage = function() {
  var stage = {
    id: BeerId,
    stage: 4,
    stage0: 0,
    stage1: 0,
    stage2: 0,
    stage3: 0,
    stage4: 1
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
