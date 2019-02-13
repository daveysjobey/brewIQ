// Get references to page elements
var $beerText = $("#beer-text");
var $beerDescription = $("#beer-description");
var $submitBtn = $("#submit");
var $beerList = $("#beer-list");
var $editBtn = $(".edit-btn");

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
var refreshBeers = function() {
  API.getBeers().then(function(data) {
    var $beers = data.map(function(beer) {
      var $a = $("<a>")
        .text(beer.text)
        .attr("href", "/beer/" + beer.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": beer.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $beerList.empty();
    $beerList.append($beers);
  });
};

// handleFormSubmit is called whenever we submit a new beer
// Save the new beer to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var beer = {
    text: $beerText.val().trim(),
    description: $beerDescription.val().trim()
  };

  if (!(beer.text && beer.description)) {
    alert("You must enter a beer text and description!");
    return;
  }

  API.saveBeer(beer).then(function() {
    refreshBeers();
  });

  $beerText.val("");
  $beerDescription.val("");
};

// handleDeleteBtnClick is called when an beer's delete button is clicked
// Remove the beer from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteBeer(idToDelete).then(function() {
    refreshBeers();
  });
};

$(".edit-btn").on("click", function() {
  
  var stage = $(this).data("stage");
  console.log(stage);
});

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$beerList.on("click", ".delete", handleDeleteBtnClick);
