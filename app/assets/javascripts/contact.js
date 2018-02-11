$(document).ready(function(){
  $("#send-message").click(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    if (name == "  " || name.length < 1 || $("#name").hasClass('invalid')) {
      return $(".errors-text .name-error").slideDown('fast');
    } else {
      $(".errors-text .name-error").slideUp('fast');
    }
    if ($("#email").hasClass('invalid') || email.length < 1 || email == " ") {
      return $(".errors-text .email-error").slideDown('fast')
    } else {
      $(".errors-text .email-error").slideUp('fast')
    }
    if ($("#subject").hasClass('invalid') || subject.length < 1 || subject == " ") {
      return $(".errors-text .subject-error").slideDown('fast')
    } else {
      $(".errors-text .subject-error").slideUp('fast')
    }
    if ($("#message").hasClass('invalid') || message.length < 1 || message == " ") {
      $("#success-message").slideUp('fast');
      return $(".errors-text .message-error").slideDown('fast');
    } else {
      $(".errors-text .message-error").slideUp('fast')
    }
    $.ajax({
      // url: 'http://localhost:3000/contact',
      url: "https://template-hq.herokuapp.com/contact",
      method: 'POST',
      dataType: "json",
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
    }).success(function(response){
      // console.log(response)
      if (response.status){
        $("#success-message").slideDown('fast');
        $("#name").val("");
        $("#email").val("");
        $("#subject").val("");
        $("#message").val("");
      }
    }).error(function(response){
      // console.log(response)
    });
  });
});
