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

// The API object contains methods for each kind of request we'll make
var API = {
  saveBeer: function(beer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/beers",
      data: JSON.stringify(beer)
    });
  },
  getBeers: function() {
    return $.ajax({
      url: "api/beers",
      type: "GET"
    });
  },
  updateBeer: function() {
    return $.ajax({
      url: "api/beers",
      type: "PUT"
    });
  },
  deleteBeer: function(id) {
    return $.ajax({
      url: "api/beers/" + id,
      type: "DELETE"
    });
  }
};

// refreshBeers gets new beers from the db and repopulates the list
// var refreshBeers = function() {
//   API.getBeers().then(function(data) {
//     var $beers = data.map(function(beer) {
//       var $a = $("<a>")
//         .text(beer.text)
//         .attr("href", "/beer/" + beer.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": beer.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $brewDate.empty();
//     $brewDate.append($beers);
//   });
// };

// handleFormSubmit is called whenever we submit a new beer
// Save the new beer to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var beer = {
    mashWaterVol: $mashWaterVol.val("").trim(),
    strikeTemp: $strikeTemp.val("").trim(),
    mashTemp: $mashTemp.val("").trim(),
    allInTime: $allInTime.val("").trim(),
    vorlofStartTime: $vorlofStartTime.val("").trim(),
    lauterStartTime: $lauterStartTime.val("").trim(),
    lauterStopTime: $lauterStopTime.val("").trim(),
    spargeStartTime: $spargeStartTime.val("").trim(),
    spargeStopTime: $spargeStopTime.val("").trim(),
    spargeWaterVol: $spargeWaterVol.val("").trim(),
    kettleFullVol: $kettleFullVol.val("").trim(),
    preboilGravity: $preboilGravity.val("").trim(),
    postboilGravity: $postboilGravity.val("").trim(),
    boilStartTime: $boilStartTime.val("").trim(),
    whilrpoolStartTime: $whilrpoolStartTime.val("").trim(),
    whilrpoolStopTime: $whilrpoolStopTime.val("").trim(),
    knockOutStart: $knockOutStart.val("").trim(),
    knockOutStop: $knockOutStop.val("").trim(),
    knockOutTemp: $knockOutTemp.val("").trim(),
    o2Lmp: $o2Lmp.val("").trim(),
    yeastName: $yeastName.val("").trim(),
    yeastGen: $yeastGen.val("").trim(),
    pitchVol: $pitchVol.val("").trim(),
    fvTemp: $fvTemp.val("").trim(),
    dryhopDate: $dryhopDate.val("").trim(),
    celleringDate: $celleringDate.val("").trim()
  };

  //if (!(beer.yeastName && beer.style && beer.brewerName && beer.brewDate)) {
  //alert(
  //"You must enter the beer's brand, style, brewer's name, and brew date"//);
  //return;
  //}

  API.saveBeer(beer);
  //.then(function() {
  //refreshBeers();

  //);

  $batchNumber.val("");
  $fermenter.val("");
  $ingredient1.val("");
  $ingredient1Weight.val("");
  $ingredient2.val("");
  $ingredient2Weight.val("");
  $ingredient3.val("");
  $ingredient3Weight.val("");
  $ingredient4.val("");
  $ingredient4Weight.val("");
  $ingredient5.val("");
  $ingredient5Weight.val$("");
  $zincWeight.val("");
  $whirlflocWeight.val("");
  $CaCl2Weight.val("");
  $CoSo4Weight.val("");
  $hop1.val("");
  $hop1Weight.val("");
  $hop1Boil.val("");
  $hop2.val("");
  $hop2Weight.val("");
  $hop2Boil.val("");
  $hop3.val("");
  $hop3Weight.val("");
  $hop3Boil.val("");
  $dryhop1.val("");
  $dryhop1Weight.val("");
  $dryhop1Boil.val("");
  $dryhop2.val("");
  $dryhop2Weight.val("");
  $dryhop2Boil.val("");
  $dryhop3.val("");
  $dryhop3Weight.val("");
  $dryhop3Boil.val$("");
  $volUnits.val("");
  $notes.val("");
};

// handleDeleteBtnClick is called when an beer's delete button is clicked
// Remove the beer from the db and refresh the list
//var handleDeleteBtnClick = function() {
//var idToDelete = $(this)
//.parent()
//.attr("data-id");

//API.deleteBeer(idToDelete).then(function() {
//refreshBeers();
//});
//};

// Add event listeners to the submit and delete buttons
$submit.on("click", handleFormSubmit);
//$delete.on("click", ".delete", handleDeleteBtnClick);
