// // Simple jQuery Parallax w/ Opacity scrolling plugin. 
// // Written by Joshua Comeau, (c) 2014
// function plax(view) {
// 	var node = $(view),
// 			wind = $(window),
//       speed = 1500,
//       nodeHeight = node.height();

//   if ( view === "#view_1") {
//     var newBgPosition = (nodeHeight/2 * -1) + "px" ,
//         newTextPosition = (nodeHeight/10 * -1) + "px";

//     // Do the background position and opacity of home_splash_inner
//     $(".home_splash_inner").animate({
//       opacity: 0,
//       backgroundPositionY: newBgPosition
//     }, speed);
//     $(".home_splash").animate({
//       backgroundPositionY: newBgPosition
//     }, speed);

//     // Do the splash_text position.
//     $(".splash_text").animate({
//       opacity: 0.5,
//       top: newTextPosition
//     }, speed)

//     // Move our new view up
//     $("#view_2").animate({
//       top: 0
//     }, speed);
//   }
// }

// function plax_bind() {
//   $(".top_left_logo").on("click", function() {
//     plax("#view_1");
//   })
// }
