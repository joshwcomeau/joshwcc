

function nav_functions() {
  // Get nav height
  var nav_height = $(".desktop_nav").height();

  $(".desktop_nav li").hover(function(){
      $(this).children().filter(':not(:animated)').animate({ top: -nav_height/2 }, 350);
  }, function() {
      $(this).children().animate({ top: 0 }, 250);
  });


  // Mobile - Nav button
  $(".mobile_nav_button").click(function(event) {
    // remove any previously-selected nav items
    $(".mobile_nav_menu a").removeClass("mobile_selected_link");

    event.stopPropagation();
    $(".mobile_nav_menu").slideToggle(500);
    $(this).toggleClass("passive_mobile_nav").toggleClass("active_mobile_nav");
  });
  $('html').click(function() {
    if ( $(".mobile_nav_menu").is(":visible") ) {
      $(".mobile_nav_menu").slideUp(500);
      $(".mobile_nav_button").removeClass("active_mobile_nav").addClass("passive_mobile_nav");
    }
  });

  // Mobile - click a menu item
  $(".mobile_nav_menu a").click(function() {
    $(this).toggleClass("mobile_selected_link");
  });

  // Event Binders
  // bindRotateToLogo();
}



function bindRotateToLogo() {
  $(".top_left_logo").mouseenter(function() {
    $(".decorative_bars").addClass("rotator");
  }).mouseleave(function() {
    $(".decorative_bars").removeClass("rotator");
  });
}