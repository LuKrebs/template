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

