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
      url: 'http://localhost:3000',
      method: "GET",
      dataType: "json",
      data: {arrival: arrival, departure: departure}
    }).done(function(response) {
      console.log(response);
    }).success(function(response){
      console.log("Response only " + response);
      console.log("teste  " + response.teste);
    }).error(function(response){
      console.log(response);
    });
  });

});

