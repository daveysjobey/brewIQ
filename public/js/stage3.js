// Get references to page elements
var $brightTank = $("#brightTank");
var $transferDate = $("#transferDate");
var $transferVol = $("#transferVol");
var $kegDate = $("#kegDate");
var $kegVol = $("#kegVol");
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

    brightTank: $brightTank.val("#brightTank").trim(),
    transferDate: $transferDate.val("#transferDate").trim(),
    transferVol: $transferVol.val("#transferVol").trim(),
    kegDate: $kegDate.val("#kegDate").trim(),
    kegVol: $kegVol.val("#kegVol").trim()
  };

  if (!(beer.transferDate && beer.transferVol && beer.kegDate && beer.kegVol)) {
    alert(
      "You must enter the beer's brand, style, brewer's name, and brew date"
    );
    return;
  }

  API.saveBeer(beer);
  //.then(function() {
  //refreshBeers();

  //);

  $brightTank.val("");
  $transferDate.val("");
  $transferVol.val("");
  $kegDate.val("");
  $kegVol.val("");
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