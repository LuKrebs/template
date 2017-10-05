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
                          <div class='input-field col s7 m6 l6' style='padding: 0px; float: left; margin-top: 0px;'>\
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
                          <div class='input-field col s7 m6 l6' style='padding: 0px; float: left; margin-top: 0px;'>\
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
});

