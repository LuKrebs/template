$(document).ready(function() {

  $("#booking").click(function() {
    $(".booking_cards").empty();
    var arrival = $("#arrival").val();
    var departure = $("#departure").val();

    $("li.error-message i").css('color', 'white');

    if (arrival == "") {
      return $(".error-message-arrival-date").slideDown("fast");
    }
    if (departure == "") {
      return $(".error-message-departure-date").slideDown("fast");
    }

    arrival = new Date(arrival);
    departure = new Date(departure);
    if (arrival >= departure) {
      return $(".error-message-equal-date").slideDown("fast");
    }
    if (arrival < new Date()) {
     return $(".error-message-less-date").slideDown("fast");
    }

    $("#myNav").css('width', "100%");
    $(".info-content i").first().addClass("item-active");
    $(".info-content span").first().addClass("text-active");

    var arrival = $("#arrival").val();
    var departure = $("#departure").val();

    $.ajax({
      // url: 'http://localhost:3000',
      url: "https://template-hq.herokuapp.com/",
      method: "GET",
      dataType: "json",
      data: {arrival: arrival, departure: departure}
    }).success(function(response){
      console.log(response);

      for (var i = 0; i < 5; i++) {
        var imagesArray = response.images[i];
        for (var j = 0; j < imagesArray.length; j++) {
          if (j > 0) {
            $("body").append("<a href='" + imagesArray[j] + "' class='swipebox' style='display: none;' rel='bed-" + i + "'><img src='" + imagesArray[j] + "' alt='image'></a>");
          };
        }
        var units = response.units[i].length;
        var array = response.names[i]
        var val = array[array.length - 1];
        var card = "<div class='col s12 m8 offset-m2 l6'>\
                      <div class='card' style='min-height: 320px; min-width: 240px;'>\
                        <div class='card-image' >\
                          <a href='" + response.images[i][0] + "' class='swipebox' rel='bed-" + i + "'><img src='" + response.images[i][0] + "' alt='image'></a>\
                          <span class='card-title white-text right-align' style='z-index: 1;'>" + val + " <i class='fa fa-user' aria-hidden='true' style='margin-left: 5px;'></i></span>\
                        </div>\
                        <div class='card-content' style='height: 25vh; max-height: 130px;'>\
                          <div class='booking-info'>\
                            <span class='black-text first-booking-text' style='float: left;'>" + response.names[i][0] + "</span>\
                            <span class='red-text second-booking-text' style='float: right; text-decoration: line-through;'>" + response.prices[i][1] + "</span>\
                          </div>\
                          <div class='booking-info'>\
                            <span class='red-text third-booking-text'>DISCOUNT 5%</span>\
                            <span class='black-text fourth-booking-text'>" + response.prices[i][2] + "</span>\
                          </div>\
                          <div class='input-field col s7 m6 l6' style='padding: 0px; float: left; margin-top: 0px;' onchange='ableButton(" + i + ");'>\
                            <select>\
                              <option value='0' selected>Quantas camas?</option>";
                              for (var j = 0; j < units; j++) {
                                card += "<option value='" + j + "'>" + j + "</option>";
                              }
                            card += "</select>\
                          </div>\
                        </div>\
                      </div>\
                    </div>";
        $(".booking_cards").append(card);

      $('select').material_select();
      }
    }).error(function(response){
      // console.log(response);
    });
  });

  $("#booking_overlay_page").click(function() {
    $(".booking_cards").empty();
    var arrival = $("#arrival_overlay_page").val();
    var departure = $("#departure_overlay_page").val();

    $("li.error-message i").css('color', 'white');

    if (arrival == "") {
      return $(".error-message-arrival-date").slideDown("fast");
    }
    if (departure == "") {
      return $(".error-message-departure-date").slideDown("fast");
    }

    arrival = new Date(arrival);
    departure = new Date(departure);
    if (arrival >= departure) {
      return $(".error-message-equal-date").slideDown("fast");
    }
    if (arrival < new Date()) {
     return $(".error-message-less-date").slideDown("fast");
    }

    var arrival = $("#arrival_overlay_page").val();
    var departure = $("#departure_overlay_page").val();

    $.ajax({
      // url: 'http://localhost:3000',
      url: "https://template-hq.herokuapp.com/",
      method: "GET",
      dataType: "json",
      data: {arrival: arrival, departure: departure}
    }).success(function(response){
      console.log(response);

      for (var i = 0; i < 5; i++) {
        var imagesArray = response.images[i];
        for (var j = 0; j < imagesArray.length; j++) {
          if (j > 0) {
            $("body").append("<a href='" + imagesArray[j] + "' class='swipebox' style='display: none;' rel='bed-" + i + "'><img src='" + imagesArray[j] + "' alt='image'></a>");
          };
        }
        var units = response.units[i].length;
        var array = response.names[i]
        var val = array[array.length - 1];
        var card = "<div class='col s12 m8 offset-m2 l6'>\
                      <div class='card' style='min-height: 320px; min-width: 240px;'>\
                        <div class='card-image' >\
                          <a href='" + response.images[i][0] + "' class='swipebox' rel='bed-" + i + "'><img src='" + response.images[i][0] + "' alt='image'></a>\
                          <span class='card-title white-text right-align' style='z-index: 1;'>" + val + " <i class='fa fa-user' aria-hidden='true' style='margin-left: 5px;'></i></span>\
                        </div>\
                        <div class='card-content' style='height: 25vh; max-height: 130px;'>\
                          <div class='booking-info'>\
                            <span class='black-text first-booking-text' style='float: left;'>" + response.names[i][0] + "</span>\
                            <span class='red-text second-booking-text' style='float: right; text-decoration: line-through;'>" + response.prices[i][1] + "</span>\
                          </div>\
                          <div class='booking-info'>\
                            <span class='red-text third-booking-text'>DISCOUNT 5%</span>\
                            <span class='black-text fourth-booking-text'>" + response.prices[i][2] + "</span>\
                          </div>\
                          <div class='input-field col s7 m6 l6' style='padding: 0px; float: left; margin-top: 0px;' onchange='ableButton(" + i + ");'>\
                            <select>\
                              <option value='0' selected>Quantas camas?</option>";
                              for (var j = 0; j < units; j++) {
                                card += "<option value='" + j + "'>" + j + "</option>";
                              }
                            card += "</select>\
                          </div>\
                        </div>\
                      </div>\
                    </div>";
        $(".booking_cards").append(card);

      $('select').material_select();
      }
    }).error(function(response){
      // console.log(response);
    });
  });

  $(".rentButton").click(function(){
    var bedsAndPrices = [];
    $(".fourth-booking-text").each(function(index){
      var price = $(this).text()
      var numberOfBeds = $("input.select-dropdown")[index].value;
      var name = $(".first-booking-text")[index].innerText;
      price = parseFloat(price.replace("R$", ""))
      numberOfBeds = parseInt(numberOfBeds);
      if (!(isNaN(numberOfBeds))) {
          if (numberOfBeds > 1) {
            var totalPrice = price * numberOfBeds
            bedsAndPrices.push([price, numberOfBeds, name, totalPrice]);
            console.log(bedsAndPrices)
          }
      }
    });
    $(".booking_cards").empty();
    $(".form-to-booking").slideDown("fast");
    $(".info-content i.item-active").removeClass("item-active");
    $(".info-content span.text-active").removeClass("text-active");
    $(".info-content:nth-child(2) i").addClass("item-active");
    $(".info-content:nth-child(2) span").addClass("text-active");
    $(".rentButton").slideUp("fast");
    $(".card-panel").remove();
    $(".google-maps").empty();

  //   var card = "<div class='card-panel white' style='min-width: 220px;'>\
  //                 <span class='black-text'>\
  //                   <ul>\
  //                     <li>Quarto:</li>\
  //                     <li>" + bedsAndPrices[0][2] + "</li>\
  //                     <li>Preço:</li>\
  //                     <li>" + bedsAndPrices[0][3] + "</li>\
  //                     <li>Unidades:</li>\
  //                     <li>" + bedsAndPrices[0][1] + "</li>\
  //                     <li></li>\
  //                     <li>Subtotal: </li>\
  //                     <li style='display: none'> (+) Café da manhã: BRL" + (12 * bedsAndPrices[0][1]) + "</li>\
  //                     <li>Total:" + bedsAndPrices[0][2] + "</li>\
  //                   </ul>\
  //                 </span>\
  //               </div>"
  // $(".google-maps").append(card);
  });
});

function ableButton(number) {
  var numberOfBeds = parseInt($("input.select-dropdown")[number].value);
  $(".rentButton").slideUp('fast');
  $("input.select-dropdown").each(function(index) {
    var bed = $( this ).val()
    if (!isNaN(bed)) {
      if (bed > 0) {
        console.log(bed);
        return $(".rentButton").slideDown('fast');
      }
    }
  });
};
