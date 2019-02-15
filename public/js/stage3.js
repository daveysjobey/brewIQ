// Get references to page elements
var $brightTank = $("#brightTank");
var $transferDate = $("#transferDate");
var $transferVol = $("#transferVol");
var $kegDate = $("#kegDate");
var $kegVol = $("#kegVol");
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
      url: "api/stage3",
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
  event.preventDefault();

  var beer = {
    brightTank: $brightTank.val().trim(),
    transferDate: $transferDate.val().trim(),
    transferVol: $transferVol.val().trim(),
    kegDate: $kegDate.val().trim(),
    kegVol: $kegVol.val().trim()
  };

  API.saveBeer(beer)
    .then(function () {
      updateBeerStage();
    });


  $brightTank.val("");
  $transferDate.val("");
  $transferVol.val("");
  $kegDate.val("");
  $kegVol.val("");
};

var updateBeerStage = function () {
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
  setTimeout(returnHome, 1000);
};
var returnHome = function () {
  window.location.href = "/";
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