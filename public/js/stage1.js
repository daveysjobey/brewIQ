// Get references to page elements
var $batchNumber = $("#batch_number");
var $fermenter = $("#fermenter");
var $ingredient1 = $("#ingredient_1");
var $ingredient1Weight = $("#ingredient_1_weight");
var $ingredient2 = $("#ingredient_2");
var $ingredient2Weight = $("#ingredient_2_weight");
var $ingredient3 = $("#ingredient_3");
var $ingredient3Weight = $("#ingredient_3_weight");
var $ingredient4 = $("#ingredient_4");
var $ingredient4Weight = $("#ingredient_4_weight");
var $ingredient5 = $("#ingredient_4");
var $ingredient5Weight = $("#ingredient_5_weight");
var $zincWeight = $("#zinc_weight");
var $whirlflocWeight = $("#whirlfloc_weight");
var $CaCl2Weight = $("#CaCl2_weight");
var $CoSo4Weight = $("#CoSo4_weight");
var $hop1 = $("#hop_1");
var $hop1Weight = $("#hop_1_weight");
var $hop1Boil = $("#hop_1_boil");
var $hop2 = $("#hop_2");
var $hop2Weight = $("#hop_2_weight");
var $hop2Boil = $("#hop_2_boil");
var $hop3 = $("#hop_2");
var $hop3Weight = $("#hop_3_weight");
var $hop3Boil = $("#hop_3_boil");
var $dryhop1 = $("#dryhop_1");
var $dryhop1Weight = $("#dryhop_1_weight");
var $dryhop1Boil = $("#dryhop_1_boil");
var $dryhop2 = $("#dryhop_2");
var $dryhop2Weight = $("#dryhop_2_weight");
var $dryhop2Boil = $("#dryhop_2_boil");
var $dryhop3 = $("#dryhop_3");
var $dryhop3Weight = $("#dryhop_3_weight");
var $dryhop3Boil = $("#dryhop_3_boil");
var $volUnits = $("#vol_units");
var $notes = $("#notes");
var $submit = $("#submit");

// The API object contains methods for each kind of request we'll make
var API = {
    saveBeer: function (beer) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/beers",
            data: JSON.stringify(beer)
        });
    },
    getBeers: function () {
        return $.ajax({
            url: "api/beers",
            type: "GET"
        });
    },
    updateBeer: function () {
        return $.ajax({
            url: "api/beers",
            type: "PUT"
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
        brand: $batchNumber.val().trim(),
        batch_number: $batchNumber.val("").trim(),
        fermenter: $fermenter.val("").trim(),
        ingredient_1: $ingredient1.val("").trim(),
        ingredient_1_weight: $ingredient1Weight.val("").trim(),
        ingredient_2: $ingredient2.val("").trim(),
        ingredient_2_weight: $ingredient2Weight.val("").trim(),
        ingredient_3: $ingredient3.val("").trim(),
        ingredient_3_weight: $ingredient3Weight.val("").trim(),
        ingredient_: $ingredient4.val("").trim(),
        ingredient_4_weight: $ingredient4Weight.val("").trim(),
        ingredient_5: $ingredient5.val("").trim(),
        ingredient_5_weight:  $ingredient5Weight.val$("").trim(),
        zinc_weight: $zincWeight.val("").trim(),
        whirlfloc_weight: $whirlflocWeight.val("").trim(),
        CaCl2_weight: $CaCl2Weight.val("").trim(),
        CoSo4_weight: $CoSo4Weight.val("").trim(),
        hop_1: $hop1.val("").trim(),
        hop_1_weight: $hop1Weight.val("").trim(),
        hop_1_boil: $hop1Boil.val("").trim(),
        hop_2: $hop2.val("").trim(),
        hop_2_weight: $hop2Weight.val("").trim(),
        hop_2_boil: $hop2Boil.val("").trim(),
        hop_3: $hop3.val("").trim(),
        hop_3_weight: $hop3Weight.val("").trim(),
        hop_3_boil: $hop3Boil.val("").trim(),
        dryhop_1: $dryhop1.val("").trim(),
        dryhop_1_weight: $dryhop1Weight.val("").trim(),
        dryhop_1_boil: $dryhop1Boil.val("").trim(),
        dryhop_2: $dryhop2.val("").trim(),
        dryhop_2_weight: $dryhop2Weight.val("").trim(),
        dryhop_2_boil: $dryhop2Boil.val("").trim(),
        dryhop_3: $dryhop3.val("").trim(),
        dryhop_3_weight: $dryhop3Weight.val("").trim(),
        dryhop_3_boil: $dryhop3Boil.val("").trim(),
        vol_units: $volUnits.val("").trim(),
        notes: $notes.val("").trim()
    };

    if (!(beer.brand && beer.style && beer.brewer_name && beer.brew_date)) {
        alert("You must enter the beer's brand, style, brewer's name, and brew date");
        return;
    }

    API.saveBeer(beer)
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
}

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