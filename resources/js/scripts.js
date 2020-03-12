
$(document).ready(function() {
  $(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() < 550) {
      $('#hero-nav').removeClass('fixed-top');
    }

    if ($(window).scrollTop() > 551) {
      $('#hero-nav').addClass('fixed-top');
    }

  });
});