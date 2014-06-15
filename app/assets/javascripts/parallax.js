// Simple jQuery Parallax w/ Opacity scrolling plugin. 
// Written by Joshua Comeau, (c) 2014

function plax(source, speed, horizontalPos, opacityEffect) {
	var node = $(source),
			wind = $(window);

	wind.scroll(function() {
		var distTop 	 = wind.scrollTop(),
				newOffset  = distTop * speed,
				nodeHeight = node.height(),
				nodeTop 	 = node.offset().top;

		node.css({
			backgroundPosition : horizontalPos + " " + newOffset + "px"
		});

		if ( opacityEffect ) {
			// OPACITY.
			// We want the opacity to go from 1 to 0.25, as the scroll distance goes from 0 to max. 
			// We'll standardize 'max' as 1 by doing current_scroll/object_height
			var normalizedPosition = (distTop - nodeTop) / nodeHeight;
			var newOpacity = (-0.75 * normalizedPosition) + 1;

			node.css({
				opacity: newOpacity
			});
		}
		
	});
}