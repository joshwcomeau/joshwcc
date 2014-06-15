// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  // Navigation functions (desktop and mobile hover/click events)
  nav_functions();

  // Parallax
  plax(".home_splash", "background", 0.9, false, "right");
  plax(".home_splash_inner", "background", 0.9, true, "right");
  plax(".splash_text", "element", 0.8, false);

});