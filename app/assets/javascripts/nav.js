$(document).ready(function() {
  // Get nav height
  var nav_height = $("nav").height();

  $(".nav_link").mouseenter(function() {
    $(this).parent().children(".nav_highlight").animate({
      bottom: 0
    }, 300);
  }).mouseout(function() {
    $(this).parent().children(".nav_highlight").animate({
      bottom: -nav_height
    }, 200);
  });

  // Mobile - Nav button
  $(".mobile_nav_button").click(function(event) {
    event.stopPropagation();
    $(".mobile_nav_menu").slideDown(500);
    $(this).removeClass("passive_mobile_nav").addClass("active_mobile_nav");
  });

  $('html').click(function() {
    if ( $(".mobile_nav_menu").is(":visible") ) {
      $(".mobile_nav_menu").slideUp(500);
      $(".mobile_nav_button").removeClass("active_mobile_nav").addClass("passive_mobile_nav");
    }
  });

  // Event Binders
  // bindRotateToLogo();
});



function bindRotateToLogo() {
  $(".top_left_logo").mouseenter(function() {
    $(".decorative_bars").addClass("rotator");
  }).mouseleave(function() {
    $(".decorative_bars").removeClass("rotator");
  });
}