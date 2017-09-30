$(document).ready(function() {
  $('.datepicker').pickadate({
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Ok',
    closeOnSelect: true // Close upon selecting a date,
  });
  $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
  });
  $('.carousel').carousel();
  $('.scrollspy').scrollSpy();
  $("#arrival").on('change', function(){
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var arrival = $("#arrival").val();
    var result = new Date(arrival);
    result.setDate(result.getDate() + 2);
    if (arrival == "") {
      return $("#departure").val("");
    }
    $("#departure").val(result.getDate().toString() + " " + monthNames[result.getMonth()] + " " + result.getFullYear().toString());
    $("label[for=departure]").addClass('active');
  });
  $(".error-message i").on('click', function(e) {
    e.preventDefault();
    $("ul li.error-message").slideUp("fast");
  });
  $('.swipebox').swipebox();
  $(".image-bad-card").on('click', function(e) {
    e.preventDefault();
  })

  $("#booking").on('click', function() {
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

    var arrival = $("#arrival").val();
    var departure = $("#departure").val();

    $.ajax({
      url: 'http://localhost:3000',
      // url: "https://template-hq.herokuapp.com/",
      method: "GET",
      dataType: "json",
      data: {arrival: arrival, departure: departure}
    }).done(function(response) {
      console.log(response.images[0][0])
    }).success(function(response){
      console.log(response);
      var src = response.images[0][0];
      var image_tag = "<a href='" + response.images[0][0] + "' class='swipebox' ><img src='" + response.images[0][0] + "' alt='image' class='img-responsive'></a>"
      console.log(image_tag)
    }).error(function(response){
    });
  });
});

function navbarFixedFunction() {
  var searchBarHeight = parseInt($("#fixedBookingRow").css("height").replace("px", ""));
  var searchBarPosition = $("#fixedBookingRow").position()['top'];
  var bodyScrollTop = $("body").scrollTop();

  if (bodyScrollTop > searchBarHeight + searchBarPosition) {
    if ($(window).width() < 600) {
      $(".mobileAndWidthSmallHide").hide();
    }
    $("#fixedBookingRow").css("position", "fixed");
    $("#fixedBookingRow").css("top", "0");
    $("#fixedBookingRow").css("right", "0");
    $("#fixedBookingRow").css("left", "0");
    $("#fixedBookingRow").css("margin", "auto");
    $("#fixedBookingRow").css("z-index", "100");
    $("#fixedBookingRow").css("backgroundColor", "rgba(0,0,0,0.9)");
    $(".bookRowInside").css("marginBottom", '0px');
    $(".bookRow").css("marginBottom", '0px');
    $(".input-field .material-icons.prefix").css('color', 'white');
  }
  else {
    var display = $(".mobileAndWidthSmallHide").css('display');
    if ($(window).width() < 425) {
      $(".mobileAndWidthSmallHide").show();
    }
    else if ($(window).width() > 425 && display == "none") {
      $(".mobileAndWidthSmallHide").show();
    }
    $("#fixedBookingRow").css("backgroundColor", "transparent");
    $("#fixedBookingRow").css("position", "relative");
    $("#fixedBookingRow").css("margin-bottom", "20vh");
    $(".bookRowInside").css("marginBottom", '20px');
    $(".bookRow").css("marginBottom", '20px');
    $(".input-field .material-icons.prefix").css('color', "rgba(0, 0, 0, 0.87)");
  }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
