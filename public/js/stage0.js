// Get references to page elements
var $brand = $("#brand");
var $style = $("#style");
var $brewerName = $("#brewerName");
var $brewDate = $("#brewDate");
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

var handleFormSubmit = function(event) {
  event.preventDefault();

  var beer = {
    brand: $brand.val().trim(),
    style: $style.val().trim(),
    brewerName: $brewerName.val().trim(),
    brewDate: $brewDate.val().trim(),
    stage: 1
  };

  if (!(beer.brand && beer.style && beer.brewerName && beer.brewDate)) {
    alert(
      "You must enter the beer's brand, style, brewer's name, and brew date"
    );
    return;
  }

  //saveBeer ajax call
  API.saveBeer(beer);

  $brand.val("");
  $style.val("");
  $brewerName.val("");
  $brewDate.val("");

  //gives db time to update before home page renders
  setTimeout(returnHome, 1000);
};

//directs user back home automatically after submitting
var returnHome = function() {
  window.location.href = "/";
};

$submit.on("click", handleFormSubmit);
