$(document).ready(function() {
  $("#booking").click(function() {
    $(".booking_cards").empty();
    $(".card-info-booking").empty()
    var arrival = $("#arrival").val();
    var departure = $("#departure").val();
    $("#arrival-info").empty()
    $("#departure-info").empty()
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
      return $(".error-message-equal-date").slideDown("fast")
    }
    if (arrival < new Date()) {
     return $(".error-message-less-date").slideDown("fast")
    }
    $("#myNav").css('width', "100%")
    $(".info-content i").first().addClass("item-active")
    $(".info-content span").first().addClass("text-active")
    $(".dates-info").slideDown('fast')
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
        $("#arrival-info").empty()
        $("#departure-info").empty()
        $("#arrival-info").append(response.arrive)
        $("#departure-info").append(response.departure)
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
        var card = "<div class='col s12 m6 l4'>\
                      <div class='card' style='min-height: 320px; min-width: 240px;'>\
                        <div class='card-image' >\
                          <a href='" + response.images[i][0] + "' class='swipebox' rel='bed-" + i + "'><img src='" + response.images[i][0] + "' alt='image'></a>\
                          <a href='" + response.images[i][0] + "' class='swipebox' rel='bed-" + i + "'>\
                            <span style='position: absolute; top: 0; right:0; margin: 8px;'>\
                              <i class='material-icons white-text'>zoom_in</i>\
                            </span>\
                          </a>\
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
                          <div class='input-field col s7 m6 l6 units-number' style='padding: 0px; float: left; margin-top: 0px;' onchange='ableButton();'>\
                            <select>\
                              <option value='0' selected>Camas</option>";
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
    var arrival = $("#arrival_overlay_page").val();
    var departure = $("#departure_overlay_page").val();
    $(".card-info-booking").empty()
    $("#myNav").animate({scrollTop:0},"slow")
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
    $(".booking_cards").empty();
    $(".form-to-booking").css('display', 'none');
    $(".info-content i.item-active").removeClass("item-active");
    $(".info-content span.text-active").removeClass("text-active");
    $(".info-content:nth-child(1) i").addClass("item-active");
    $(".info-content:nth-child(1) span").addClass("text-active");
    $(".dates-info").slideDown('fast')
    $.ajax({
      // url: 'http://localhost:3000',
      url: "https://template-hq.herokuapp.com/",
      method: "GET",
      dataType: "json",
      data: {arrival: arrival, departure: departure}
    }).success(function(response){
      console.log(response);
      $("#arrival-info").empty()
      $("#departure-info").empty()
      $("#arrival-info").append(response.arrive)
      $("#departure-info").append(response.departure)
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
        var card = "<div class='col s12 m6 l4'>\
                      <div class='card' style='min-height: 320px; min-width: 240px;'>\
                        <div class='card-image' >\
                          <a href='" + response.images[i][0] + "' class='swipebox' rel='bed-" + i + "'><img src='" + response.images[i][0] + "' alt='image'></a>\
                          <a href='" + response.images[i][0] + "' class='swipebox' rel='bed-" + i + "'>\
                            <span style='position: absolute; top: 0; right:0; margin: 8px;'>\
                              <i class='material-icons white-text'>zoom_in</i>\
                            </span>\
                          </a>\
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
                          <div class='input-field col s7 m6 l6 units-number' style='padding: 0px; float: left; margin-top: 0px;' onchange='ableButton();'>\
                            <select>\
                              <option value='0' selected>Camas</option>";
                              for (var j = 0; j < units; j++) {
                                card += "<option value='" + j + "'>" + j + "</option>";
                              }
                            card += "</select>\
                          </div>\
                        </div>\
                      </div>\
                    </div>";
        $(".booking_cards").append(card);
        $(".rentButton").slideDown('fast');
        $(".rentButton").attr('disabled', 'disabled');
        $(".booking-text").css('display', 'inherit');
        $('select').material_select();
      }
    }).error(function(response){
      // console.log(response);
    });
  });
  $(".rentButton").click(function(){
    $("#myNav").animate({scrollTop:$('form h5').first().position()['top']},"slow")
    var bedsAndPrices = [];
    var card = "";
    var one_day=1000*60*60*24;
    var arrivalDate = new Date($("#arrival-info").text())
    var departureDate = new Date($("#departure-info").text())
    var numberOfNights = Math.round((departureDate - arrivalDate)/one_day)
    $(".fourth-booking-text").each(function(index){
      var price = $(this).text()
      var numberOfBeds = $("input.select-dropdown")[index].value;
      var name = $(".first-booking-text")[index].innerText;
      price = parseFloat(price.replace("R$", "")).toFixed(2)
      numberOfBeds = parseInt(numberOfBeds);
      if (!(isNaN(numberOfBeds))) {
        if (numberOfBeds >= 1) {
          var totalPrice = (price * numberOfBeds).toFixed(2)
          var image = $(".card-image img")[index]
          var imageSrc = image.attributes['src'].value
          bedsAndPrices.push([price, numberOfBeds, name, totalPrice, imageSrc, numberOfNights, $("#arrival-info").text(), $("#departure-info").text(), numberOfNights]);
          card += "<div class='card'>\
                    <div class='card-image waves-effect waves-block waves-light'>\
                      <img src='" + bedsAndPrices[0][4] + "'></a>\
                    </div>\
                    <div class='card-content' style='height: 120px; position: relative;'>\
                      <span class='activator grey-text text-darken-4 room-name' style='font-size: 16px; font-weight: 400; position: absolute; top: 15px; left: 15px;'>" + bedsAndPrices[0][2] + "</span>\
                      <span style='position: absolute; top: 7px; right: 7px'><span id='number-of-nights'>"+ bedsAndPrices[0][5] + "</span> noites</span>\
                      <span style='position: absolute; bottom: 14px; left: 12px;'>Valor total R$ <span class='total-value-card'>" + bedsAndPrices[0][3] + "</span></span>\
                      <a style='cursor: pointer; cursor: pointer; position: absolute; top: 0; bottom: 0; right: 0; left: 0;' class='activator'></a>\
                      <a class='btn-floating btn waves-effect waves-light amber activator' style='cursor: pointer; position: absolute; bottom: 10px; right: 10px'><i class='material-icons'>add</i></a>\
                    </div>\
                    <div class='card-reveal'>\
                      <span class='card-title grey-text text-darken-4' style='font-size: 16px;'>" + bedsAndPrices[0][2] + "<i class='material-icons right'>close</i></span>\
                      <div class='row' style='margin-top: 10px;'>\
                        <div class='col s12 date-content' style='display: flex; justify-content: space-between; margin: 10px auto;'>\
                          <div><span style='margin: 3px auto;'>Chegada:</span></div>\
                          <div><span style='font-weight: 900;' class='arrive-date-card'>" + bedsAndPrices[0][6] + "</span></div>\
                        </div>\
                        <div class='col s12 date-content' style='display: flex; justify-content: space-between; margin: 10px auto;'>\
                          <div><span style='margin: 3px auto;'>Partida:</span></div>\
                          <div><span style='font-weight: 900;' class='departure-date-card'>" + bedsAndPrices[0][7] + "</span></div>\
                        </div>\
                        <div class='col s12' style='display: flex; justify-content: space-around; margin: 5px auto;'>\
                          <span id='number-of-units'>" + bedsAndPrices[0][1] + " cama(s)</span><span id='number-of-nights'>" + bedsAndPrices[0][5] +  " noites</span>\
                        </div>\
                        <div class='col s12' style='display: flex; flex-direction: column; align-items: center; margin: 10px auto;'>\
                          <span style='margin: 3px auto;'>Subtotal: R$ <span id='subtotal'>" + bedsAndPrices[0][3] + "</span></span>\
                          <span id='increaseBreakfast' style='display: none; font-size: 12px;'>(+) Café da manhã: BRL: R$ <span id='breakfast-card-value'></></span>\
                        </div>\
                        <span style='position: absolute; bottom: 12px; right: 12px; font-weight: 600; font-size: 14px;'>Valor total: R$ <span class='total-value-card'>" + bedsAndPrices[0][3] + "</span></span>\
                      </div>\
                    </div>\
                  </div>"
        }
        console.log(bedsAndPrices)
      }
    });
    $(".booking_cards").empty();
    $(".card-info-booking").append(card)
    $(".dates-info").css('display', 'none')
    $(".form-to-booking").slideDown("fast");
    $(".info-content i.item-active").removeClass("item-active")
    $(".info-content span.text-active").removeClass("text-active")
    $(".info-content:nth-child(2) i").addClass("item-active")
    $(".info-content:nth-child(2) span").addClass("text-active")
    $(".rentButton").slideUp("fast");
  });
  $("#confirm-booking").click(function() {
    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
    var guestEmail = $("#guest_email").val();
    var confirmEmail = $("#confirm_email").val();
    var guestPhone = $("#phone").val();
    var guestCountry = $("#country input").val();
    var guestNotes = $("#notes").val();
    var guestBreakfast = $('#breakfast').prop('checked');
    var guestDiscountCode = $("#discount_code").val();
    var guestCreditCardName = $("#credit-card-name").val();
    var guestCreditCardNumber = $("#credit-card-number").val();
    var monthExpirationDate = $("#month-expiration input").val();
    var yearExpirationDate = $("#year-expiration input").val();
    var securityCode = $("#security-code").val();
    if (firstName == "  " || firstName.length < 1 || $("#first_name").hasClass('invalid')) {
      return $(".errors-text .name-error").slideDown('fast');
    } else {
      $(".errors-text .name-error").slideUp('fast');
    }
    if (lastName == "  " || lastName.length < 1 || $("#last_name").hasClass('invalid')) {
      return $(".errors-text .last-name-error").slideDown('fast')
    } else {
      $(".errors-text .last-name-error").slideUp('fast')
    }
    if ($("#guest_email").hasClass('invalid') || guestEmail.length < 1 || guestEmail == " ") {
      return $(".errors-text .email-error").slideDown('fast')
    } else {
      $(".errors-text .email-error").slideUp('fast')
    }
    if (guestEmail != confirmEmail) {
      return $(".errors-text .confirm-email-error").slideDown('fast')
    } else {
      $(".errors-text .confirm-email-error").slideUp('fast')
    }
    if (guestPhone.length < 1 || guestPhone == " " || guestPhone == "   " || $("#phone").hasClass('invalid') ) {
      return $(".errors-text .phone-error").slideDown('fast')
    } else {
      $(".errors-text .phone-error").slideUp('fast')
    }
    if (guestCountry == "País" || guestCountry == "") {
     return $(".errors-text .country-error").slideDown('fast')
    } else {
      $(".errors-text .country-error").slideUp('fast')
    }
    if (guestCreditCardName == " " || guestCreditCardName.length < 4 || $("#credit-card-name").hasClass('invalid')) {
      return $(".errors-text .credit-card-name-error").slideDown('fast')
    } else {
      $(".errors-text .credit-card-name-error").slideUp('fast')
    }
    if (guestCreditCardNumber == " " || guestCreditCardNumber.length < 16 || $("#credit-card-name").hasClass('invalid')) {
      return $(".errors-text .credit-card-number-error").slideDown('fast')
    } else {
      $(".errors-text .credit-card-number-error").slideUp('fast')
    }
    if (securityCode == " " || securityCode.length < 3 || $("#security-code").hasClass('invalid')) {
      return $(".errors-text .security-code-error").slideDown('fast')
    } else {
      $(".errors-text .security-code-error").slideUp('fast')
    }
    var totalValue = $(".total-value-card").first().text()
    var arrive = $(".arrive-date-card").text()
    var departure = $(".departure-date-card").text()
    var subtotal = $("#subtotal").text()
    var breakfast = $('#breakfast').prop('checked');
    var breakfastValue = $("#breakfast-card-value").text();
    var room = $(".room-name").text()
    $.ajax({
      // url: 'http://localhost:3000/confirm',
      url: "https://template-hq.herokuapp.com/confirm",
      method: "POST",
      dataType: "json",
      data: {
        first_name: firstName,
        last_name: lastName,
        email: guestEmail,
        phone: guestPhone,
        country: guestCountry,
        notes: guestNotes,
        breakfast: guestBreakfast,
        descount_cupom: guestDiscountCode,
        arrive: arrive,
        departure: departure,
        subtotal_price: subtotal,
        breakfast: breakfast,
        breakfast_value: breakfastValue,
        total_price: totalValue,
        room: room
      }
    }).success(function(response){
      console.log(response);
      if (response.status) {
        $("#myNav").animate({scrollTop:$('.form-to-booking').first().position()['top']},"slow")
        $(".info-content i.item-active").removeClass("item-active")
        $(".info-content span.text-active").removeClass("text-active")
        $(".info-content:nth-child(3) i").addClass("item-active")
        $(".info-content:nth-child(3) span").addClass("text-active")
        $(".form-to-booking").empty()
        $(".popout").slideUp('fast')
        var thanksMessage = "<h3 class='center-align' style='font-size: 2.22rem;'>Obrigado por escolher o <span class='notranslate'>Café Hostel</span>.</h3>"
        var spanMessage = "<h5 class='center-align' style='font-size: 1.44rem;'>Se você não receber um e-mail dentro de 24 hrs, por favor cheque na sua lixeira eletrônica.</h5>"
        $(".form-to-booking").css('backgroundColor', 'rgb(240,240,240)');
        $(".form-to-booking").css('border-radius', '2px')
        $(".form-to-booking").css('padding', '25px 0');
        $(".form-to-booking").append(thanksMessage)
        $(".form-to-booking").append(spanMessage)
      } else {

      }
    }).error(function(response){
      // console.log(response)
    });
  });
});
function ableButton(){
  $(".rentButton").attr('disabled', 'disabled');
  $(".booking-text").css('display', 'inherit');
  $(".units-number input.select-dropdown").each(function(index){
    var bed = $( this ).val()
    if (!isNaN(bed)) {
      if (bed > 0) {
        $(".booking-text").css('display', 'none');
        return $(".rentButton").removeAttr('disabled');
      }
    }
  });
};
function checkTermsAndConditions(){
  if (!$("#terms-and-conditions").prop('checked')) {
      $("#confirm-booking").attr('disabled', 'disabled');
  } else {
    $("#confirm-booking").removeAttr('disabled');
  }
};
function creditCardValidation(){
  setTimeout(function(){
    if (($("#credit-card-number").val() != " ") && ($("#credit-card-number").val().length >= 16) && ($("#credit-card-number").hasClass('valid'))){
      $("#confirm-booking").removeClass('disabled');
      $("#confirm-booking").removeAttr('disabled');
    } else {
      $("#confirm-booking").attr('disabled', 'disabled');
      $("#confirm-booking").addClass('disabled');
    }
  }, 200);
}
function checkEmailConfirmation(){
  setTimeout(function(){
    if ($("#guest_email").val() != $("#confirm_email").val()) {
     $("#confirm_email").addClass('invalid')
    }
  }, 200);
}
function increaseBreakfastValue(){
  var subtotal = parseFloat($("#subtotal").text().replace("R$", "")).toFixed(2)
  var numberOfNights = parseInt($("#number-of-nights").text())
  var numberOfUnits = parseInt($("#number-of-units").text())
  var breakfastValue = (12 * numberOfNights * numberOfUnits)
  var totalBookingValue = (parseFloat(breakfastValue) + parseFloat(subtotal)).toFixed(2)
  if ($("#breakfast").prop('checked')) {
    $(".subtotalValue").empty()
    $(".breakfast-total-price").empty()
    $(".total-booking-value").empty()
    $(".total-value-card").empty()
    $("#breakfast-card-value").empty()
    $("#breakfastIncrease").slideDown('fast')
    $(".subtotalValue").append(subtotal)
    $(".breakfast-total-price").append(breakfastValue)
    $(".total-booking-value").append(totalBookingValue)
    $(".total-value-card").append(totalBookingValue)
    $("#increaseBreakfast").slideDown('fast')
    $("#breakfast-card-value").append(breakfastValue)
  } else {
    $("#breakfastIncrease").slideUp('fast')
    $("#increaseBreakfast").slideUp('fast')
    $(".total-value-card").empty()
    $(".total-value-card").append(subtotal)
  }
}
