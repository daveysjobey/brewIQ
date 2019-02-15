// Get references to page elements
var $batchNumber = $("#batchNumber");
var $fermenter = $("#fermenter");
var $ingredient1 = $("#ingredient1");
var $ingredient1Weight = $("#ingredient1Weight");
var $ingredient2 = $("#ingredient2");
var $ingredient2Weight = $("#ingredient2Weight");
var $ingredient3 = $("#ingredient3");
var $ingredient3Weight = $("#ingredient3Weight");
var $ingredient4 = $("#ingredient4");
var $ingredient4Weight = $("#ingredient4Weight");
var $ingredient5 = $("#ingredient4");
var $ingredient5Weight = $("#ingredient5Weight");
var $zincWeight = $("#zincWeight");
var $whirlflocWeight = $("#whirlflocWeight");
var $CaCl2Weight = $("#CaCl2Weight");
var $CoSo4Weight = $("#CoSo4Weight");
var $hop1 = $("#hop1");
var $hop1Weight = $("#hop1Weight");
var $hop1Boil = $("#hop1Boil");
var $hop2 = $("#hop2");
var $hop2Weight = $("#hop2Weight");
var $hop2Boil = $("#hop2Boil");
var $hop3 = $("#hop2");
var $hop3Weight = $("#hop3Weight");
var $hop3Boil = $("#hop3Boil");
var $dryhop1 = $("#dryhop1");
var $dryhop1Weight = $("#dryhop1Weight");
var $dryhop1Boil = $("#dryhop1Boil");
var $dryhop2 = $("#dryhop2");
var $dryhop2Weight = $("#dryhop2Weight");
var $dryhop2Boil = $("#dryhop2Boil");
var $dryhop3 = $("#dryhop3");
var $dryhop3Weight = $("#dryhop3Weight");
var $dryhop3Boil = $("#dryhop3Boil");
var $volUnits = $("#volUnits");
var $notes = $("#notes");
var $submit = $("#submit");
var pathArray = window.location.pathname.split('/');
var BeerId = pathArray[2];
console.log(BeerId);

// The API object contains methods for each kind of request we'll make
var API = {
  saveBeer: function (beer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/stage1/",
      data: JSON.stringify(beer)
    });
  },


  getBeers: function () {
    return $.ajax({
      url: "api/beers",
      type: "GET"
    });
  },
  updateStage: function (stage) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "api/beers/" + BeerId,
      type: "PUT",
      data: JSON.stringify(stage)
    });
  },
  deleteBeer: function (id) {
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
var handleFormSubmit = function (event) {
  console.log("hello");
  event.preventDefault();

  var pathArray = window.location.pathname.split('/');
  var BeerId = pathArray[2];
  console.log(BeerId);

  var beer = {
    brand: $batchNumber.val().trim(),
    batchNumber: $batchNumber.val().trim(),
    fermenter: $fermenter.val().trim(),
    ingredient1: $ingredient1.val().trim(),
    ingredient1Weight: $ingredient1Weight.val().trim(),
    ingredient2: $ingredient2.val().trim(),
    ingredient2Weight: $ingredient2Weight.val().trim(),
    ingredient3: $ingredient3.val().trim(),
    ingredient3Weight: $ingredient3Weight.val().trim(),
    ingredient4: $ingredient4.val().trim(),
    ingredient4Weight: $ingredient4Weight.val().trim(),
    ingredient5: $ingredient5.val().trim(),
    ingredient5Weight: $ingredient5Weight.val().trim(),
    zincWeight: $zincWeight.val().trim(),
    whirlflocWeight: $whirlflocWeight.val().trim(),
    CaCl2Weight: $CaCl2Weight.val().trim(),
    CoSo4Weight: $CoSo4Weight.val().trim(),
    hop1: $hop1.val().trim(),
    hop1Weight: $hop1Weight.val().trim(),
    hop1Boil: $hop1Boil.val().trim(),
    hop2: $hop2.val().trim(),
    hop2Weight: $hop2Weight.val().trim(),
    hop2Boil: $hop2Boil.val().trim(),
    hop3: $hop3.val().trim(),
    hop3Weight: $hop3Weight.val().trim(),
    hop3Boil: $hop3Boil.val().trim(),
    dryhop1: $dryhop1.val().trim(),
    dryhop1Weight: $dryhop1Weight.val().trim(),
    dryhop1Boil: $dryhop1Boil.val().trim(),
    dryhop2: $dryhop2.val().trim(),
    dryhop2Weight: $dryhop2Weight.val().trim(),
    dryhop2Boil: $dryhop2Boil.val().trim(),
    dryhop3: $dryhop3.val().trim(),
    dryhop3Weight: $dryhop3Weight.val().trim(),
    dryhop3Boil: $dryhop3Boil.val().trim(),
    volUnits: $volUnits.val().trim(),
    notes: $notes.val().trim(),
    BeerId: BeerId
  };

  API.saveBeer(beer)
    .then(function () {
      updateBeerStage();
    });

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
  $ingredient5Weight.val("");
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
  $dryhop3Boil.val("");
  $volUnits.val("");
  $notes.val("");
};

var updateBeerStage = function () {
  var stage = {
    id: BeerId,
    stage: 2,
    stage0: 0,
    stage1: 0,
    stage2: 1,
    stage3: 0,
    stage4: 0
  };
  API.updateStage(stage);
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