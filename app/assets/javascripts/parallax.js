// Simple jQuery Parallax w/ Opacity scrolling plugin. 
// Written by Joshua Comeau, (c) 2014
function plax(source, type, speed, opacityEffect, horizontalPos) {
  var node = $(source),
      wind = $(window);

  var originalOffset = node.offset().top;

  wind.scroll(function() {
    var distTop    = wind.scrollTop(),
        newOffset  = distTop * speed,
        nodeHeight = node.height(),
        nodeTop    = node.offset().top;

    if ( type == "background" ) {
      plax_bg(node, speed, opacityEffect, newOffset, horizontalPos);
    } else {
      plax_elem(node, speed, opacityEffect, newOffset, originalOffset);
    }

    if ( opacityEffect ) {
      // OPACITY.
      // We want the opacity to go from 1 to 0.25, as the scroll distance goes from 0 to max. 
      // We'll standardize 'max' as 1 by doing current_scroll/object_height
      var normalizedPosition = (distTop - nodeTop) / nodeHeight;
      var newOpacity = (-1.65 * normalizedPosition) + 1;

      // if ( type != "background" ) { console.log(normalizedPosition); }

      node.css({
        'opacity'        : newOpacity
      });
    }
  });
}


// For parallaxing background-position
function plax_bg(source, speed, opacityEffect, newOffset, horizontalPos) {
  source.css({
    backgroundPosition : horizontalPos + " " + newOffset + "px"
  });
}

// For parallaxing absolutely-positioned elements
function plax_elem(source, speed, opacityEffect, newOffset, originalOffset) {
  source.css({
    top : (originalOffset + newOffset) + "px"
  });
}

