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

  $("#booking").on('click', function() {
    var arrival = $("#arrival").val();
    var departure = $("#departure").val();

    $.ajax({
      // url: 'http://localhost:3000',
      url: "https://template-hq.herokuapp.com/",
      method: "GET",
      dataType: "json",
      data: {arrival: arrival, departure: departure}
    }).done(function(response) {
      // console.log(response);
    }).success(function(response){
      console.log(response);
        $(".bed").slideDown('fast');
        $(".image-bed-one").attr('src', response.images[0])
        $(".title-bed-one").html("<span>" + response.names[0][0] + "</span>" + "<span style='margin-left: 3%'>" + response.prices[0][2] + "</span>")
    }).error(function(response){
    });
  });
});

function navbarFixedFunction() {
  var searchBarHeight = parseInt($("#fixedBookingRow").css("height").replace("px", ""));
  var searchBarPosition = $("#fixedBookingRow").position()['top'];
  var bodyScrollTop = $("body").scrollTop();
  console.log("body scrollTop: " + bodyScrollTop);
  console.log("navbar position: " + searchBarHeight);

  if (bodyScrollTop > searchBarHeight + searchBarPosition) {
    if ($(window).width() < 425) {
      $(".mobileAndWidthSmallHide").hide();
    }
    $("#fixedBookingRow").css("position", "fixed");
    $("#fixedBookingRow").css("top", "0");
    $("#fixedBookingRow").css("right", "0");
    $("#fixedBookingRow").css("left", "0");
    $("#fixedBookingRow").css("margin", "auto");
    $("#fixedBookingRow").css("z-index", "1000");
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
