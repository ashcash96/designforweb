$(document).ready(function() {   $('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});
  });
