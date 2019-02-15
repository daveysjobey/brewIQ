var beerInfo;
var $name = $("#name");
var $info = $("#info");
var pathArray = window.location.pathname.split("/");
var BeerId = pathArray[2];
console.log(BeerId);

$(document).ready(function() {
  // Get references to page elements
  function getBeer(BeerId) {
    $.get("/stage4/api/beers/" + BeerId, function (res) {
      console.log("Beer Info", res);
      beerInfo = res;
      initializeBeer(res);
    });

    function initializeBeer(res) {
      $name.append("<h1>" + res.brand + "</h1>");
      $info.append("<p>Style: " + res.style + "</p>");
      $info.append("<p>Brewed BY: " + res.brewerName + "</p>");
    }
  }

  getBeer(BeerId);
});
