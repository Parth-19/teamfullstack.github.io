$(window).scroll(function () {
  var scroll_amount = $(window).scrollTop();
  if (scroll_amount > 100) {
    $(".navbar").addClass('navbar_resize');
    $(".navbar").removeClass('navbar_noresize');
    $(".navbar img").addClass('navbar_logo_resize');
    $(".navbar img").removeClass('navbar_logo_noresize');
    $(".navbar-toggler").addClass('navbar_toggler_resize');
    $(".navbar-toggler").removeClass('navbar_toggler_noresize');

  }
  if (scroll_amount == 0) {
    $(".navbar").removeClass('navbar_resize');
    $(".navbar").addClass('navbar_noresize');
    $(".navbar img").removeClass('navbar_logo_resize');
    $(".navbar img").addClass('navbar_logo_noresize');
    $(".navbar-toggler").removeClass('navbar_toggler_resize');
    $(".navbar-toggler").addClass('navbar_toggler_noresize');
  }
});

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

var i = 0;
var txt = 'Team FullStack'; /* The text */
var speed = 120; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header_title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


/*
$('#start_journey').on('click', function () {
  $('#bootcamp_choice').fadeIn();
  $('body').css('overflow', 'hidden');
});
$('#footer_start_journey').on('click', function () {
  $('#bootcamp_choice').fadeIn();
  $('body').css('overflow', 'hidden');
});
const $cross1 = $('.bootcamp_choice_cross_one');
const $cross2 = $('.bootcamp_choice_cross_two');
$(document).mouseover(e => {
  if ((!$cross1.is(e.target) // if the target of the click isn't the container...
    && $cross1.has(e.target).length === 0)
    && (!$cross2.is(e.target)
      && $cross2.has(e.target).length === 0)) // ... nor a descendant of the container
  {
    $cross1.removeClass('bootcamp_choice_cross_one_hover');
    $cross2.removeClass('bootcamp_choice_cross_two_hover');
  }
});
$('.bootcamp_choice_cross_one').on('mouseover', () => {
  $('.bootcamp_choice_cross_two').addClass('bootcamp_choice_cross_two_hover');
  $('.bootcamp_choice_cross_one').addClass('bootcamp_choice_cross_one_hover');
});
$('.bootcamp_choice_cross_two').on('mouseover', () => {
  $('.bootcamp_choice_cross_two').addClass('bootcamp_choice_cross_two_hover');
  $('.bootcamp_choice_cross_one').addClass('bootcamp_choice_cross_one_hover');
});

$('.bootcamp_choice_cross_one').on('click', () => {
  $('#bootcamp_choice').fadeOut();
  $('body').css('overflow', 'visible');
});
$('.bootcamp_choice_cross_two').on('click', () => {
  $('#bootcamp_choice').fadeOut();
  $('body').css('overflow', 'visible');
});*/