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