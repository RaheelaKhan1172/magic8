var vague = ["It remains to be seen.", "Who knows?", "Sorry, you caused a 404 error with that question.","Don't count on it.", "Sure,why not?","Hmm...",
              "Let me get back to you about that", "Well,sure!", "Maybe", "Yes","Wow..just..wow", "You left me speechless..really"];


function showDialog() {
  $(".dialog").show();
};

function validInput() {
  var correct;
  var input = $('#prompt').val();
  
  if (input.length > 1 && input.endsWith('?')) {
    correct = true;
     } else {
    $(".dialog").append('<p class="error">It\'s just a question..not rocket science</p>');
     correct = false; 
  }; 

  $('#prompt').data("valid_input", correct);
  return correct;
};

/* main */
$(document).ready(function() {
  $(".dialog").hide();
  setTimeout(function() {
      $('.eye').removeClass("sleepy-eye");
    showDialog();}, 10000);
  $("#button-button").click(function() {
  var randomValue = vague[Math.floor(Math.random() * vague.length)];
  
    var is_valid = validInput();
    if (is_valid == true) {
      $(".error").hide();
      var sound = $('.sound');
      sound[0].play();
      $('#popup').html(randomValue);
    }
  });
});
 
