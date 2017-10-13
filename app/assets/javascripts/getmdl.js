$(document).ready(function() {
  $('.datepicker').pickadate({
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Ok',
    closeOnSelect: true
  });
  $(".button-collapse").sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
  });
  $('.carousel').carousel();
  $('.scrollspy').scrollSpy();
  $('.swipebox').swipebox();
  $('select').material_select();
  $('.collapsible').collapsible();
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
  $("#arrival_overlay_page").on('change', function(){
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var arrival = $("#arrival_overlay_page").val();
    var result = new Date(arrival);
    result.setDate(result.getDate() + 2);
    if (arrival == "") {
      return $("#departure_overlay_page").val("");
    }
    $("#departure_overlay_page").val(result.getDate().toString() + " " + monthNames[result.getMonth()] + " " + result.getFullYear().toString());
    $("label[for=departure_overlay_page]").addClass('active');
  });
  $(".error-message i").on('click', function(e) {
    e.preventDefault();
    $("ul li.error-message").slideUp("fast");
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
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
